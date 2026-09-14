<?php
/**
 * Carga todos los precios instalador vigentes desde la base y los
 * deja disponibles como array PHP ($__precios_instalador) para que
 * cada página los embeba en el HTML como JS ya renderizado en el
 * servidor (nada de fetch/AJAX — la página entera ya está protegida
 * por auth-instalador.php antes de llegar acá).
 */
require_once __DIR__ . '/db.php';

$__precios_instalador = [];
$stmt = $pdo->query('SELECT producto_id, precio_efectivo FROM precios_instalador');
foreach ($stmt as $row) {
    $__precios_instalador[$row['producto_id']] = (float) $row['precio_efectivo'];
}
