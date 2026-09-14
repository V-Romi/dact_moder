<?php
/**
 * Guardia de sesión para páginas de instaladores.
 * Se incluye AL PRINCIPIO de cada página protegida (catálogo
 * instalador). Si no hay sesión activa y aprobada, redirige al login.
 */

require_once __DIR__ . '/session-init.php';

if (empty($_SESSION['instalador_id']) || empty($_SESSION['instalador_activo'])) {
    header('Location: /login-instaladores.php?redirect=' . urlencode($_SERVER['REQUEST_URI']));
    exit;
}
