<?php
require_once __DIR__ . '/db.php';

$token = $_GET['token'] ?? $_POST['token'] ?? '';
$error = '';
$success = false;
$tokenValido = false;
$instaladorId = null;

if ($token !== '') {
    $stmt = $pdo->prepare(
        'SELECT instalador_id FROM password_resets WHERE token = ? AND used = 0 AND expires_at > NOW() LIMIT 1'
    );
    $stmt->execute([$token]);
    $reset = $stmt->fetch();
    if ($reset) {
        $tokenValido = true;
        $instaladorId = $reset['instalador_id'];
    }
}

if ($tokenValido && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $nueva = $_POST['password'] ?? '';
    $repetir = $_POST['password2'] ?? '';

    if (strlen($nueva) < 8) {
        $error = 'La contraseña tiene que tener al menos 8 caracteres.';
    } elseif ($nueva !== $repetir) {
        $error = 'Las dos contraseñas no coinciden.';
    } else {
        $hash = password_hash($nueva, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare('UPDATE instaladores SET password_hash = ? WHERE id = ?');
        $stmt->execute([$hash, $instaladorId]);

        $stmt = $pdo->prepare('UPDATE password_resets SET used = 1 WHERE token = ?');
        $stmt->execute([$token]);

        $success = true;
    }
}
?>
<!DOCTYPE html>
<html lang="es-AR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Elegir nueva contraseña | Instaladores DAClimaTECH</title>
<meta name="robots" content="noindex, nofollow">
<link rel="icon" type="image/png" href="/img/favicon-daclimatech.png">
<style>
  :root { --primary-color:#005C98; --bg-light:#f8fafc; --text-dark:#2d3748; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    background:var(--bg-light); color:var(--text-dark);
    min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px;
  }
  .auth-card {
    background:#fff; border-radius:16px; padding:40px 32px; max-width:400px; width:100%;
    box-shadow:0 10px 40px rgba(0,92,152,.1); border:1px solid #e2e8f0;
  }
  .auth-logo { color:var(--primary-color); font-size:1.5rem; font-weight:800; margin-bottom:8px; text-align:center; }
  .auth-title { font-size:1.1rem; font-weight:700; margin-bottom:10px; text-align:center; }
  label { display:block; font-size:.85rem; font-weight:600; margin:14px 0 6px; }
  input[type=password], input[type=text] {
    width:100%; padding:12px 14px; border:1.5px solid #e2e8f0; border-radius:10px; font-size:.95rem; font-family:inherit;
  }
  .pwd-wrap { position:relative; }
  .pwd-wrap input { padding-right:44px; }
  .pwd-toggle {
    position:absolute !important; right:6px; top:50%; transform:translateY(-50%) !important;
    width:auto !important; height:auto !important; margin:0 !important; min-width:0;
    background:none !important; border:0; cursor:pointer; padding:6px; line-height:1;
    display:flex; align-items:center; justify-content:center; color:#98a2b3; border-radius:6px;
    -webkit-appearance:none; appearance:none; box-shadow:none;
  }
  .pwd-toggle:hover { color:#475467; background:#f1f5f9 !important; }
  input:focus { outline:none; border-color:var(--primary-color); }
  button {
    width:100%; margin-top:22px; padding:13px; border:0; border-radius:10px; background:var(--primary-color);
    color:#fff; font-weight:700; font-size:.95rem; cursor:pointer; font-family:inherit;
  }
  button:hover { background:#004a7a; }
  .auth-error {
    background:#fef2f2; color:#b91c1c; border:1px solid #fecaca; border-radius:10px;
    padding:10px 14px; font-size:.85rem; margin-top:16px;
  }
  .auth-success {
    background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0; border-radius:10px;
    padding:16px; font-size:.87rem; text-align:center; line-height:1.5;
  }
  .auth-links { margin-top:20px; text-align:center; font-size:.85rem; }
  .auth-links a { color:var(--primary-color); text-decoration:none; font-weight:600; }
</style>
</head>
<body>
  <div class="auth-card">
    <div class="auth-logo">DAClimaTECH</div>

    <?php if ($success): ?>
      <div class="auth-title">¡Listo!</div>
      <div class="auth-success">Tu contraseña se actualizó correctamente. Ya podés ingresar con la nueva.</div>
      <div class="auth-links"><a href="login-instaladores.php">Ir al login</a></div>

    <?php elseif (!$tokenValido): ?>
      <div class="auth-title">Link inválido o vencido</div>
      <div class="auth-error">Este link ya no es válido — puede que haya vencido (dura 1 hora) o que ya lo hayas usado antes.</div>
      <div class="auth-links"><a href="olvide-password.php">Pedir un link nuevo</a></div>

    <?php else: ?>
      <div class="auth-title">Elegí tu nueva contraseña</div>

      <?php if ($error): ?>
        <div class="auth-error"><?= htmlspecialchars($error) ?></div>
      <?php endif; ?>

      <form method="POST">
        <input type="hidden" name="token" value="<?= htmlspecialchars($token) ?>">

        <label for="password">Contraseña nueva (mínimo 8 caracteres)</label>
        <div class="pwd-wrap">
          <input type="password" id="password" name="password" required minlength="8" autocomplete="new-password">
          <button type="button" class="pwd-toggle" data-target="password" aria-label="Mostrar u ocultar contraseña">
            <svg class="pwd-icon-open" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            <svg class="pwd-icon-closed" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.6 21.6 0 0 1 5.06-6.94M9.9 4.24A10.6 10.6 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
          </button>
        </div>

        <label for="password2">Repetir contraseña</label>
        <div class="pwd-wrap">
          <input type="password" id="password2" name="password2" required minlength="8" autocomplete="new-password">
          <button type="button" class="pwd-toggle" data-target="password2" aria-label="Mostrar u ocultar contraseña">
            <svg class="pwd-icon-open" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            <svg class="pwd-icon-closed" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.6 21.6 0 0 1 5.06-6.94M9.9 4.24A10.6 10.6 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
          </button>
        </div>

        <button type="submit">Guardar nueva contraseña</button>
      </form>
    <?php endif; ?>
  </div>
  <script>
    document.querySelectorAll('.pwd-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = document.getElementById(btn.dataset.target);
        var open = btn.querySelector('.pwd-icon-open');
        var closed = btn.querySelector('.pwd-icon-closed');
        var showing = input.type === 'text';
        input.type = showing ? 'password' : 'text';
        open.style.display = showing ? '' : 'none';
        closed.style.display = showing ? 'none' : '';
      });
    });
  </script>
</body>
</html>
