<?php
/**
 * Form Submission Handler
 * DataArk Labs - Lead Management System
 * 
 * This script processes contact form submissions and stores them in the database
 */

require_once 'config.php';

// Set JSON response header
header('Content-Type: application/json');

// Function to sanitize input
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Function to validate email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Function to check rate limiting
function checkRateLimit($pdo, $ip_address) {
    try {
        $stmt = $pdo->prepare("
            SELECT COUNT(*) as count 
            FROM leads 
            WHERE ip_address = ? 
            AND submitted_at > DATE_SUB(NOW(), INTERVAL 1 HOUR)
        ");
        $stmt->execute([$ip_address]);
        $result = $stmt->fetch();
        
        return $result['count'] < MAX_SUBMISSIONS_PER_IP;
    } catch (PDOException $e) {
        error_log("Rate limit check error: " . $e->getMessage());
        return true; // Allow submission if check fails
    }
}

// Function to send email notification
function sendEmailNotification($leadData) {
    if (!ENABLE_EMAIL_NOTIFICATIONS) {
        return true;
    }
    
    $to = ADMIN_EMAIL;
    $subject = "New Lead Submission - " . SITE_NAME;
    
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #08314d; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f8f9fa; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #08314d; }
            .field-value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #08314d; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Lead Submission</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='field-label'>Name:</div>
                    <div class='field-value'>{$leadData['name']}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Email:</div>
                    <div class='field-value'>{$leadData['email']}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Company:</div>
                    <div class='field-value'>{$leadData['company']}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Phone:</div>
                    <div class='field-value'>{$leadData['phone']}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Service Interest:</div>
                    <div class='field-value'>{$leadData['service_interest']}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Company Size:</div>
                    <div class='field-value'>{$leadData['company_size']}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Message:</div>
                    <div class='field-value'>{$leadData['message']}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Submitted:</div>
                    <div class='field-value'>{$leadData['submitted_at']}</div>
                </div>
            </div>
            <div class='footer'>
                <p>This lead was submitted through {$leadData['site_url']}</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . FROM_EMAIL . "\r\n";
    
    return mail($to, $subject, $message, $headers);
}

// Main processing logic
try {
    // Only accept POST requests
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method');
    }
    
    // Get database connection
    $pdo = getDatabaseConnection();
    if (!$pdo) {
        throw new Exception('Database connection failed');
    }
    
    // Get client IP address
    $ip_address = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    
    // Check rate limiting
    if (!checkRateLimit($pdo, $ip_address)) {
        throw new Exception('Too many submissions. Please try again later.');
    }
    
    // Get and validate form data
    $name = sanitizeInput($_POST['name'] ?? '');
    $email = sanitizeInput($_POST['email'] ?? '');
    $company = sanitizeInput($_POST['company'] ?? '');
    $phone = sanitizeInput($_POST['phone'] ?? '');
    $service = sanitizeInput($_POST['service'] ?? '');
    $companySize = sanitizeInput($_POST['company-size'] ?? '');
    $message = sanitizeInput($_POST['message'] ?? '');
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($company) || empty($message)) {
        throw new Exception('Please fill in all required fields');
    }
    
    // Validate email format
    if (!isValidEmail($email)) {
        throw new Exception('Please enter a valid email address');
    }
    
    // Validate message length
    if (strlen($message) < 10) {
        throw new Exception('Please provide a more detailed message (at least 10 characters)');
    }
    
    // Get user agent
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    
    // Insert into database
    $stmt = $pdo->prepare("
        INSERT INTO leads (
            name, email, company, phone, service_interest, 
            company_size, message, ip_address, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $name,
        $email,
        $company,
        $phone,
        $service,
        $companySize,
        $message,
        $ip_address,
        $user_agent
    ]);
    
    $lead_id = $pdo->lastInsertId();
    
    // Prepare data for email
    $leadData = [
        'name' => $name,
        'email' => $email,
        'company' => $company,
        'phone' => $phone ?: 'Not provided',
        'service_interest' => $service ?: 'Not specified',
        'company_size' => $companySize ?: 'Not specified',
        'message' => nl2br($message),
        'submitted_at' => date('Y-m-d H:i:s'),
        'site_url' => SITE_URL
    ];
    
    // Send email notification
    $emailSent = sendEmailNotification($leadData);
    
    // Log email notification
    if (ENABLE_EMAIL_NOTIFICATIONS) {
        $stmt = $pdo->prepare("
            INSERT INTO email_notifications (lead_id, recipient_email, status, error_message) 
            VALUES (?, ?, ?, ?)
        ");
        $stmt->execute([
            $lead_id,
            ADMIN_EMAIL,
            $emailSent ? 'sent' : 'failed',
            $emailSent ? null : 'Email sending failed'
        ]);
    }
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! We\'ll be in touch within 24 hours.',
        'lead_id' => $lead_id
    ]);
    
} catch (Exception $e) {
    // Return error response
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
    
    if (DEBUG_MODE) {
        error_log("Form submission error: " . $e->getMessage());
    }
}
?>
