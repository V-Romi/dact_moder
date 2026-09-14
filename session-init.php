<?php
/**
 * DAClimaTECH — Sesiones guardadas en la base de datos.
 *
 * En este hosting, la carpeta de sesiones por defecto de PHP (y
 * también una carpeta propia dentro del sitio) no persisten bien
 * entre un pedido y el siguiente — problema típico de permisos en
 * hosting compartido, donde el usuario que ejecuta PHP es distinto
 * al usuario de FTP. En vez de pelear con permisos de archivos,
 * guardamos la sesión directamente en una tabla de la base de
 * datos, que ya sabemos que funciona bien para esta cuenta.
 */

require_once __DIR__ . '/db.php';

class DbSessionHandler implements SessionHandlerInterface
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function open($savePath, $sessionName): bool
    {
        return true;
    }

    public function close(): bool
    {
        return true;
    }

    public function read($id): string
    {
        $stmt = $this->pdo->prepare('SELECT data FROM sesiones WHERE id = ? AND last_activity > ?');
        $stmt->execute([$id, time() - 1440]); // sesiones de más de 24 min sin uso se consideran vencidas
        $row = $stmt->fetch();
        return $row ? $row['data'] : '';
    }

    public function write($id, $data): bool
    {
        $stmt = $this->pdo->prepare(
            'INSERT INTO sesiones (id, data, last_activity) VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE data = VALUES(data), last_activity = VALUES(last_activity)'
        );
        return $stmt->execute([$id, $data, time()]);
    }

    public function destroy($id): bool
    {
        $stmt = $this->pdo->prepare('DELETE FROM sesiones WHERE id = ?');
        return $stmt->execute([$id]);
    }

    public function gc($max_lifetime): int|false
    {
        $stmt = $this->pdo->prepare('DELETE FROM sesiones WHERE last_activity < ?');
        $stmt->execute([time() - $max_lifetime]);
        return $stmt->rowCount();
    }
}

session_set_save_handler(new DbSessionHandler($pdo), true);

if (session_status() === PHP_SESSION_NONE) {
    // Le cambiamos el nombre a la cookie de sesión (en vez del
    // default "PHPSESSID"): algo en el hosting está filtrando esa
    // cookie puntual antes de que PHP la reciba.
    session_name('dacli_sess');
    session_start([
        'cookie_httponly' => true,
        'cookie_samesite' => 'Lax',
    ]);
}
