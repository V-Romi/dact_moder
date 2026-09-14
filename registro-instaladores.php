<?php
require_once __DIR__ . '/db.php';

$error = '';
$success = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email    = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $empresa  = trim($_POST['empresa'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');

    if ($email === '' || $password === '' || $empresa === '') {
        $error = 'Completá email, contraseña y empresa.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'El email no es válido.';
    } elseif (strlen($password) < 8) {
        $error = 'La contraseña tiene que tener al menos 8 caracteres.';
    } else {
        $stmt = $pdo->prepare('SELECT id FROM instaladores WHERE email = ? LIMIT 1');
        $stmt->execute([$email]);
        if ($stmt->fetch()) {
            $error = 'Ya existe una cuenta con ese email. Probá iniciar sesión.';
        } else {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $stmt = $pdo->prepare(
                'INSERT INTO instaladores (email, password_hash, empresa, telefono, estado) VALUES (?, ?, ?, ?, "pendiente")'
            );
            $stmt->execute([$email, $hash, $empresa, $telefono]);
            $success = true;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es-AR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Solicitar alta | Instaladores DAClimaTECH</title>
<link rel="icon" type="image/png" href="/img/favicon-daclimatech.png">
<meta name="robots" content="noindex, nofollow">
<style>
  :root { --primary-color:#005C98; --accent-color:#4CAF50; --bg-light:#f8fafc; --text-dark:#2d3748; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    background:var(--bg-light); color:var(--text-dark);
    min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px;
  }
  .auth-card {
    background:#fff; border-radius:16px; padding:40px 32px; max-width:420px; width:100%;
    box-shadow:0 10px 40px rgba(0,92,152,.1); border:1px solid #e2e8f0;
  }
  .auth-logo { color:var(--primary-color); font-size:1.5rem; font-weight:800; margin-bottom:8px; text-align:center; }
  .auth-title { font-size:1.15rem; font-weight:700; margin-bottom:10px; text-align:center; }
  .auth-sub { font-size:.85rem; color:#667085; text-align:center; margin-bottom:22px; }
  label { display:block; font-size:.85rem; font-weight:600; margin:14px 0 6px; }
  input {
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
    padding:16px; font-size:.9rem; text-align:center; line-height:1.5;
  }
  .auth-links { margin-top:20px; text-align:center; font-size:.85rem; }
  .auth-links a { color:var(--primary-color); text-decoration:none; font-weight:600; }
  .auth-links a:hover { text-decoration:underline; }
</style>
</head>
<body>
  <div class="auth-card">
    <div class="auth-logo">DAClimaTECH</div>

    <?php if ($success): ?>
      <div class="auth-success">
        ¡Listo! Recibimos tu solicitud.<br>
        Un asesor la va a revisar y te avisamos apenas esté aprobada para que puedas ingresar.
      </div>
      <div class="auth-links"><a href="instaladores.html">Volver a la página de instaladores</a></div>
    <?php else: ?>
      <div class="auth-title">Solicitar alta como instalador</div>
      <div class="auth-sub">Tu cuenta queda en revisión hasta que la aprobemos.</div>

      <?php if ($error): ?>
        <div class="auth-error"><?= htmlspecialchars($error) ?></div>
      <?php endif; ?>

      <form method="POST" action="registro-instaladores.php">
        <label for="empresa">Empresa / Nombre y apellido</label>
        <input type="text" id="empresa" name="empresa" required value="<?= htmlspecialchars($_POST['empresa'] ?? '') ?>">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required autocomplete="username" value="<?= htmlspecialchars($_POST['email'] ?? '') ?>">

        <label for="telefono">Teléfono / WhatsApp</label>
        <input type="tel" id="telefono" name="telefono" value="<?= htmlspecialchars($_POST['telefono'] ?? '') ?>">

        <label for="password">Contraseña (mínimo 8 caracteres)</label>
        <div class="pwd-wrap">
          <input type="password" id="password" name="password" required minlength="8" autocomplete="new-password">
          <button type="button" class="pwd-toggle" data-target="password" aria-label="Mostrar u ocultar contraseña">
            <svg class="pwd-icon-open" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            <svg class="pwd-icon-closed" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.6 21.6 0 0 1 5.06-6.94M9.9 4.24A10.6 10.6 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
          </button>
        </div>

        <button type="submit">Solicitar alta</button>
      </form>

      <div class="auth-links">¿Ya tenés cuenta aprobada? <a href="login-instaladores.php">Ingresá acá</a></div>
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
