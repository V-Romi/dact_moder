<?php
// Diagnóstico: qué pasa ANTES de que nuestro código toque nada de sesiones.
echo "<h2>Diagnóstico de sesiones</h2>";
echo "<p><strong>session.auto_start (ini):</strong> " . ini_get('session.auto_start') . " (0 = apagado, 1 = prendido)</p>";
echo "<p><strong>session_status() antes de tocar nada:</strong> " . session_status() . " (1 = sin sesión activa, 2 = ¡ya hay una sesión activa sola!)</p>";
echo "<p><strong>session.save_handler (ini):</strong> " . ini_get('session.save_handler') . "</p>";
echo "<p><strong>session.save_path (ini):</strong> " . htmlspecialchars(ini_get('session.save_path')) . "</p>";
echo "<hr>";

// Ahora sí probamos nuestro sistema completo
require_once __DIR__ . '/session-init.php';

if (!isset($_SESSION['visitas'])) {
    $_SESSION['visitas'] = 0;
}
$_SESSION['visitas']++;

echo "<p><strong>Session ID:</strong> " . htmlspecialchars(session_id()) . "</p>";
echo "<p><strong>Visitas registradas:</strong> " . $_SESSION['visitas'] . "</p>";
echo "<p><a href=''>Recargar</a></p>";
