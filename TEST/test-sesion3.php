<?php
echo "<h2>Qué cookies recibe el servidor</h2>";
echo "<pre>";
var_dump($_COOKIE);
echo "</pre>";
echo "<p><strong>session.use_cookies:</strong> " . ini_get('session.use_cookies') . "</p>";
echo "<p><strong>session.use_strict_mode:</strong> " . ini_get('session.use_strict_mode') . "</p>";
echo "<p><strong>session.cookie_secure:</strong> " . ini_get('session.cookie_secure') . "</p>";
echo "<p><strong>HTTPS activo (HTTPS var):</strong> " . ($_SERVER['HTTPS'] ?? '(no seteada)') . "</p>";
echo "<p><a href=''>Recargar</a></p>";
