<?php
require_once __DIR__ . '/db.php';

require_once __DIR__ . '/session-init.php';

// Si ya está logueado y activo, lo mandamos directo al catálogo.
if (!empty($_SESSION['instalador_id']) && !empty($_SESSION['instalador_activo'])) {
    header('Location: /catalogo-instalador-aire-acondicionado.php');
    exit;
}

$error = '';
$redirect = $_GET['redirect'] ?? '/catalogo-instalador-aire-acondicionado.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($email === '' || $password === '') {
        $error = 'Completá email y contraseña.';
    } else {
        $stmt = $pdo->prepare('SELECT id, password_hash, empresa, estado FROM instaladores WHERE email = ? LIMIT 1');
        $stmt->execute([$email]);
        $instalador = $stmt->fetch();

        if (!$instalador || !password_verify($password, $instalador['password_hash'])) {
            // Mensaje genérico a propósito: no reveles si el email existe o no.
            $error = 'Email o contraseña incorrectos.';
        } elseif ($instalador['estado'] !== 'activo') {
            $error = 'Tu cuenta todavía está en revisión. Te avisamos por WhatsApp o email apenas la aprobemos.';
        } else {
            session_regenerate_id(true); // evita session fixation
            $_SESSION['instalador_id'] = $instalador['id'];
            $_SESSION['instalador_activo'] = true;
            $_SESSION['instalador_empresa'] = $instalador['empresa'];
            header('Location: ' . $redirect);
            exit;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es-AR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ingresá | Instaladores DAClimaTECH</title>
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
    background:#fff; border-radius:16px; padding:40px 32px; max-width:400px; width:100%;
    box-shadow:0 10px 40px rgba(0,92,152,.1); border:1px solid #e2e8f0;
  }
  .auth-logo { color:var(--primary-color); font-size:1.5rem; font-weight:800; margin-bottom:8px; text-align:center; }
  .auth-title { font-size:1.15rem; font-weight:700; margin-bottom:22px; text-align:center; }
  label { display:block; font-size:.85rem; font-weight:600; margin:14px 0 6px; }
  input[type=email], input[type=password], input[type=text] {
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
  .auth-links { margin-top:20px; text-align:center; font-size:.85rem; }
  .auth-links a { color:var(--primary-color); text-decoration:none; font-weight:600; }
  .auth-links a:hover { text-decoration:underline; }
</style>
</head>
<body>
  <div class="auth-card">
    <div class="auth-logo">DAClimaTECH</div>
    <div class="auth-title">Acceso instaladores</div>

    <?php if ($error): ?>
      <div class="auth-error"><?= htmlspecialchars($error) ?></div>
    <?php endif; ?>

    <form method="POST" action="login-instaladores.php?redirect=<?= urlencode($redirect) ?>">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required autocomplete="username">

      <label for="password">Contraseña</label>
      <div class="pwd-wrap">
        <input type="password" id="password" name="password" required autocomplete="current-password">
        <button type="button" class="pwd-toggle" data-target="password" aria-label="Mostrar u ocultar contraseña">
            <svg class="pwd-icon-open" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
            <svg class="pwd-icon-closed" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.6 21.6 0 0 1 5.06-6.94M9.9 4.24A10.6 10.6 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
          </button>
      </div>

      <button type="submit">Ingresar</button>
    </form>

    <div class="auth-links" style="margin-top:12px;">
      <a href="olvide-password.php">¿Olvidaste tu contraseña?</a>
    </div>

    <div class="auth-links">
      ¿Todavía no sos instalador registrado? <a href="registro-instaladores.php">Solicitá tu alta acá</a>
    </div>
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
