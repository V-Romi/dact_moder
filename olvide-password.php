<?php
require_once __DIR__ . '/db.php';

/**
 * Constantes de configuración del envío de mails de recuperación.
 */
const MAIL_DESDE      = 'no-responder@daclimatech.com';
const MAIL_DESDE_NOMBRE = 'DAClimaTECH';
const SITIO_URL        = 'https://daclimatech.com';

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');

    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Ingresá un email válido.';
    } else {
        $stmt = $pdo->prepare('SELECT id, estado FROM instaladores WHERE email = ? LIMIT 1');
        $stmt->execute([$email]);
        $instalador = $stmt->fetch();

        // Por seguridad, siempre mostramos el mismo mensaje exista o no
        // exista esa cuenta — así nadie puede usar este formulario para
        // adivinar qué emails están registrados.
        if ($instalador && $instalador['estado'] === 'activo') {
            $token = bin2hex(random_bytes(32));
            $expira = date('Y-m-d H:i:s', time() + 3600); // 1 hora

            $stmt = $pdo->prepare(
                'INSERT INTO password_resets (token, instalador_id, expires_at) VALUES (?, ?, ?)'
            );
            $stmt->execute([$token, $instalador['id'], $expira]);

            $link = SITIO_URL . '/resetear-password.php?token=' . $token;

            $asunto = 'Recuperar tu contraseña — DAClimaTECH Instaladores';

            $cuerpoTexto = "Hola,\r\n\r\n"
                . "Recibimos un pedido para restablecer tu contraseña de instalador en DAClimaTECH.\r\n\r\n"
                . "Para elegir una contraseña nueva, entrá a este link (válido por 1 hora):\r\n"
                . $link . "\r\n\r\n"
                . "Si vos no pediste esto, podés ignorar este mail tranquilamente — tu contraseña actual sigue funcionando.\r\n\r\n"
                . "— Equipo DAClimaTECH";

            $cuerpoHtml = '
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background:#f8fafc; font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e2e8f0;">
          <tr>
            <td style="background:#005C98; padding:28px 32px; text-align:center;">
              <span style="color:#ffffff; font-size:22px; font-weight:800;">DAClimaTECH</span>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 16px; font-size:18px; color:#2d3748;">Recuperar tu contraseña</h1>
              <p style="margin:0 0 16px; font-size:14px; line-height:1.6; color:#475467;">
                Recibimos un pedido para restablecer tu contraseña de instalador en DAClimaTECH.
              </p>
              <p style="margin:0 0 24px; font-size:14px; line-height:1.6; color:#475467;">
                Hacé clic en el botón para elegir una contraseña nueva. El link es válido por <strong>1 hora</strong>.
              </p>
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
                <tr>
                  <td style="background:#005C98; border-radius:10px;">
                    <a href="' . htmlspecialchars($link) . '" style="display:inline-block; padding:14px 28px; color:#ffffff; font-size:15px; font-weight:700; text-decoration:none;">Elegir nueva contraseña</a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 8px; font-size:12px; line-height:1.5; color:#98a2b3;">
                Si el botón no funciona, copiá y pegá este link en tu navegador:<br>
                <a href="' . htmlspecialchars($link) . '" style="color:#005C98; word-break:break-all;">' . htmlspecialchars($link) . '</a>
              </p>
              <p style="margin:20px 0 0; font-size:13px; line-height:1.6; color:#98a2b3;">
                Si vos no pediste esto, podés ignorar este mail tranquilamente — tu contraseña actual sigue funcionando.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

            $boundary = md5(uniqid((string) time()));

            $headers = "From: " . MAIL_DESDE_NOMBRE . " <" . MAIL_DESDE . ">\r\n"
                . "Reply-To: " . MAIL_DESDE . "\r\n"
                . "MIME-Version: 1.0\r\n"
                . "Content-Type: multipart/alternative; boundary=\"" . $boundary . "\"\r\n";

            $cuerpo = "--" . $boundary . "\r\n"
                . "Content-Type: text/plain; charset=UTF-8\r\n\r\n"
                . $cuerpoTexto . "\r\n\r\n"
                . "--" . $boundary . "\r\n"
                . "Content-Type: text/html; charset=UTF-8\r\n\r\n"
                . $cuerpoHtml . "\r\n\r\n"
                . "--" . $boundary . "--";

            @mail($email, $asunto, $cuerpo, $headers);
        }

        $mensaje = 'Si ese email está registrado y activo, te mandamos un link para restablecer tu contraseña. Revisá tu bandeja (y la carpeta de spam, por las dudas).';
    }
}
?>
<!DOCTYPE html>
<html lang="es-AR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Recuperar contraseña | Instaladores DAClimaTECH</title>
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
  .auth-sub { font-size:.85rem; color:#667085; text-align:center; margin-bottom:22px; }
  label { display:block; font-size:.85rem; font-weight:600; margin:14px 0 6px; }
  input[type=email] {
    width:100%; padding:12px 14px; border:1.5px solid #e2e8f0; border-radius:10px; font-size:.95rem; font-family:inherit;
  }
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
  .auth-links a:hover { text-decoration:underline; }
</style>
</head>
<body>
  <div class="auth-card">
    <div class="auth-logo">DAClimaTECH</div>

    <?php if ($mensaje): ?>
      <div class="auth-title">Recuperar contraseña</div>
      <div class="auth-success"><?= htmlspecialchars($mensaje) ?></div>
      <div class="auth-links"><a href="login-instaladores.php">Volver al login</a></div>
    <?php else: ?>
      <div class="auth-title">¿Olvidaste tu contraseña?</div>
      <div class="auth-sub">Ingresá tu email y te mandamos un link para elegir una nueva.</div>

      <?php if ($error): ?>
        <div class="auth-error"><?= htmlspecialchars($error) ?></div>
      <?php endif; ?>

      <form method="POST">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required autocomplete="username" value="<?= htmlspecialchars($_POST['email'] ?? '') ?>">

        <button type="submit">Enviar link de recuperación</button>
      </form>

      <div class="auth-links"><a href="login-instaladores.php">Volver al login</a></div>
    <?php endif; ?>
  </div>
</body>
</html>
