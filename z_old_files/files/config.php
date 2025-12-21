<?php
/**
 * Database Configuration File
 * DataArk Labs - Lead Management System
 * 
 * IMPORTANT: Update these credentials with your actual Hostinger database details
 */

// Database Configuration
define('DB_HOST', 'localhost');           // Usually 'localhost' on Hostinger
define('DB_NAME', 'u537171573_saaaab');   // Your database name (you'll create this in Hostinger)
define('DB_USER', 'u537171573_saaaab');    // Your database username from Hostinger
define('DB_PASS', '.O-ZLAgRb7');    // Your database password from Hostinger
define('DB_CHARSET', 'utf8mb4');

// Email Configuration (for notifications)
define('ADMIN_EMAIL', 'hello@dataarklabs.com');  // Where to send lead notifications
define('FROM_EMAIL', 'noreply@dataarklabs.com'); // Email sender address
define('SITE_NAME', 'DataArk Labs');

// Security Settings
define('ENABLE_EMAIL_NOTIFICATIONS', true);  // Set to false to disable email notifications
define('ENABLE_CAPTCHA', false);             // Set to true if you add reCAPTCHA
define('MAX_SUBMISSIONS_PER_IP', 5);         // Maximum submissions per IP per hour
define('SUBMISSION_COOLDOWN', 300);          // Seconds between submissions (5 minutes)

// Site Settings
define('SITE_URL', 'https://www.dataarklabs.com'); // Your website URL
define('TIMEZONE', 'America/New_York');            // Your timezone

// Error Reporting (set to false in production)
define('DEBUG_MODE', false);

// Set timezone
date_default_timezone_set(TIMEZONE);

// Database Connection Function
function getDatabaseConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        return $pdo;
    } catch (PDOException $e) {
        if (DEBUG_MODE) {
            error_log("Database Connection Error: " . $e->getMessage());
        }
        return null;
    }
}

// Security Headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');

?>
