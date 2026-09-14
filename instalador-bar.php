<div id="instaladorBar" style="position:fixed;top:0;left:0;right:0;z-index:1100;background:#0b2f4a;color:#fff;
  font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:.82rem;
  display:flex;align-items:center;justify-content:center;gap:14px;padding:7px 16px;">
  <span>👋 Hola<?= !empty($_SESSION['instalador_empresa']) ? ', ' . htmlspecialchars($_SESSION['instalador_empresa']) : '' ?> — precios exclusivos en efectivo</span>
  <a href="logout-instaladores.php" style="color:#fff;text-decoration:underline;">Cerrar sesión</a>
</div>
<style>
  /* Corremos el header fijo del sitio hacia abajo para que no quede tapado por esta barra */
  body { padding-top: 34px; }
  .header { top: 34px !important; }
</style>
