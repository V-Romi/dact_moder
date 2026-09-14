<?php
/**
 * DAClimaTECH — Conexión a la base de datos de instaladores.
 *
 * IMPORTANTE: completá estos 4 valores con los datos reales que
 * generaste en el panel Dinahosting → Hosting → Bases de datos.
 * NO subas este archivo con las credenciales reales a un repositorio
 * público — solo va por FTP directo al servidor.
 */

$DB_HOST = 'localhost';                  // Dinahosting: siempre "localhost"
$DB_NAME = 'dacli_instaladores';         // el nombre que le pusiste a la base
$DB_USER = 'dacli_';         // usuario administrador de esa base
$DB_PASS = '3Fik6x9&49.?';    // la contraseña que generaste

try {
    $pdo = new PDO(
        "mysql:host={$DB_HOST};dbname={$DB_NAME};charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
} catch (PDOException $e) {
    // No mostramos el detalle del error en pantalla (podría filtrar
    // datos de conexión) — solo lo registramos en el log del servidor.
    error_log('Error de conexión DB instaladores: ' . $e->getMessage());
    http_response_code(500);
    die('No pudimos conectar con la base de datos. Intentá de nuevo en unos minutos.');
}
