<?php
require_once __DIR__ . '/session-init.php';
$_SESSION = [];
session_destroy();
header('Location: /login-instaladores.php');
exit;
