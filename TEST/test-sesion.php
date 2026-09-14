<?php
require_once __DIR__ . '/session-init.php';

if (!isset($_SESSION['visitas'])) {
    $_SESSION['visitas'] = 0;
}
$_SESSION['visitas']++;

echo "<h2>Test de sesión</h2>";
echo "<p>Session ID: " . htmlspecialchars(session_id()) . "</p>";
echo "<p>Visitas registradas en esta sesión: " . $_SESSION['visitas'] . "</p>";
echo "<p>session.save_path: " . htmlspecialchars(session_save_path()) . "</p>";
echo "<p><a href=''>Recargar esta misma página</a> — si el número de arriba sube cada vez que recargás, la sesión funciona bien.</p>";
