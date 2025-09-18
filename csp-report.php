<?php
/**
 * CSP Reporter - Manejador de reportes de violaciones CSP
 * Archivo: csp-report.php
 * 
 * Este archivo recibe y procesa los reportes de violaciones de CSP
 * que envía el navegador cuando se detecta una violación.
 */

// Headers de seguridad para este endpoint
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://daclimatech.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Solo permitir método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// Leer el cuerpo de la petición
$input = file_get_contents('php://input');
if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'No data received']);
    exit;
}

// Decodificar el JSON
$report = json_decode($input, true);
if (!$report || !isset($report['csp-report'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid CSP report format']);
    exit;
}

$cspReport = $report['csp-report'];

// Validar campos requeridos
$requiredFields = ['document-uri', 'violated-directive'];
foreach ($requiredFields as $field) {
    if (!isset($cspReport[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

// Datos del reporte
$reportData = [
    'timestamp' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
    'document_uri' => $cspReport['document-uri'],
    'violated_directive' => $cspReport['violated-directive'],
    'blocked_uri' => $cspReport['blocked-uri'] ?? 'unknown',
    'original_policy' => $cspReport['original-policy'] ?? 'unknown',
    'disposition' => $cspReport['disposition'] ?? 'enforce',
    'status_code' => $cspReport['status-code'] ?? 0,
    'referrer' => $cspReport['referrer'] ?? '',
    'source_file' => $cspReport['source-file'] ?? '',
    'line_number' => $cspReport['line-number'] ?? 0,
    'column_number' => $cspReport['column-number'] ?? 0
];

// Filtrar reportes de extensiones del navegador (opcional)
$ignoredSources = [
    'chrome-extension:',
    'moz-extension:',
    'safari-extension:',
    'ms-browser-extension:'
];

$shouldIgnore = false;
foreach ($ignoredSources as $ignored) {
    if (strpos($reportData['blocked_uri'], $ignored) === 0) {
        $shouldIgnore = true;
        break;
    }
}

if ($shouldIgnore) {
    // Responder OK pero no procesar el reporte
    echo json_encode(['status' => 'ignored', 'reason' => 'browser extension']);
    exit;
}

// Verificar si el dominio del documento es válido
$allowedDomains = ['daclimatech.com', 'www.daclimatech.com'];
$documentHost = parse_url($reportData['document_uri'], PHP_URL_HOST);

if (!in_array($documentHost, $allowedDomains)) {
    http_response_code(403);
    echo json_encode(['error' => 'Invalid document domain']);
    exit;
}

// Limitar la frecuencia de reportes por IP (rate limiting básico)
$rateLimitFile = sys_get_temp_dir() . '/csp_reports_' . md5($reportData['ip']);
$currentTime = time();
$reportTimes = [];

if (file_exists($rateLimitFile)) {
    $reportTimes = json_decode(file_get_contents($rateLimitFile), true) ?? [];
    // Limpiar reportes antiguos (más de 1 hora)
    $reportTimes = array_filter($reportTimes, function($time) use ($currentTime) {
        return ($currentTime - $time) < 3600;
    });
}

// Máximo 10 reportes por hora por IP
if (count($reportTimes) >= 10) {
    http_response_code(429);
    echo json_encode(['error' => 'Rate limit exceeded']);
    exit;
}

// Añadir el reporte actual
$reportTimes[] = $currentTime;
file_put_contents($rateLimitFile, json_encode($reportTimes));

// Guardar el reporte en un archivo de log
$logFile = __DIR__ . '/logs/csp-violations.log';
$logDir = dirname($logFile);

// Crear directorio de logs si no existe
if (!is_dir($logDir)) {
    mkdir($logDir, 0755, true);
}

// Formatear el log entry
$logEntry = json_encode($reportData) . "\n";

// Escribir al archivo de log
if (file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX) === false) {
    error_log("Failed to write CSP violation report to log file");
}

// Opcional: Enviar notificación por email para violaciones críticas
$criticalViolations = [
    'script-src',
    'object-src',
    'base-uri',
    'form-action'
];

$isCritical = false;
foreach ($criticalViolations as $critical) {
    if (strpos($reportData['violated_directive'], $critical) === 0) {
        $isCritical = true;
        break;
    }
}

if ($isCritical) {
    // Configurar el email de notificación (opcional)
    $to = 'security@daclimatech.com'; // Cambiar por tu email
    $subject = '[CRITICAL] CSP Violation Detected - DAClimaTECH';
    $message = "Critical CSP violation detected:\n\n" . 
               "URI: " . $reportData['document_uri'] . "\n" .
               "Violated Directive: " . $reportData['violated_directive'] . "\n" .
               "Blocked URI: " . $reportData['blocked_uri'] . "\n" .
               "User Agent: " . $reportData['user_agent'] . "\n" .
               "IP: " . $reportData['ip'] . "\n" .
               "Time: " . $reportData['timestamp'] . "\n";
    
    $headers = "From: noreply@daclimatech.com\r\n" .
               "Reply-To: noreply@daclimatech.com\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Descomenta la siguiente línea si quieres recibir emails
    // mail($to, $subject, $message, $headers);
}

// Respuesta exitosa
echo json_encode([
    'status' => 'received',
    'timestamp' => $reportData['timestamp'],
    'report_id' => md5($reportData['timestamp'] . $reportData['ip']),
    'critical' => $isCritical
]);

// Log adicional para debugging (opcional)
error_log("CSP Report received: " . $reportData['violated_directive'] . " from " . $reportData['document_uri']);
?>