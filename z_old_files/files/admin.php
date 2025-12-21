<?php
/**
 * Admin Dashboard - Lead Management
 * DataArk Labs
 * 
 * Simple dashboard to view and manage leads
 * IMPORTANT: Protect this file with .htaccess or move to a secure directory
 */

require_once 'config.php';

// Simple authentication (REPLACE WITH PROPER AUTH IN PRODUCTION)
session_start();

// Check if logged in
if (!isset($_SESSION['admin_logged_in'])) {
    // Show login form
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        // Verify credentials (default: admin/admin123 - CHANGE THIS!)
        if ($username === 'admin' && $password === 'admin123') {
            $_SESSION['admin_logged_in'] = true;
            header('Location: admin.php');
            exit;
        } else {
            $error = "Invalid credentials";
        }
    }
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin Login - DataArk Labs</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: Arial, sans-serif; 
                background: linear-gradient(135deg, #08314d 0%, #1a4a6b 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .login-container {
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                width: 100%;
                max-width: 400px;
            }
            h2 { color: #08314d; margin-bottom: 30px; text-align: center; }
            .form-group { margin-bottom: 20px; }
            label { display: block; margin-bottom: 5px; color: #333; font-weight: 600; }
            input { 
                width: 100%; 
                padding: 12px; 
                border: 2px solid #e0e0e0; 
                border-radius: 5px;
                font-size: 16px;
            }
            input:focus { outline: none; border-color: #08314d; }
            button {
                width: 100%;
                padding: 12px;
                background: linear-gradient(135deg, #08314d 0%, #1a4a6b 100%);
                color: white;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
            }
            button:hover { opacity: 0.9; }
            .error { 
                background: #f8d7da; 
                color: #721c24; 
                padding: 10px; 
                border-radius: 5px; 
                margin-bottom: 20px; 
            }
        </style>
    </head>
    <body>
        <div class="login-container">
            <h2>DataArk Labs Admin</h2>
            <?php if (isset($error)): ?>
                <div class="error"><?= htmlspecialchars($error) ?></div>
            <?php endif; ?>
            <form method="POST">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" name="username" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" required>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

// Handle status updates
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_status'])) {
    $pdo = getDatabaseConnection();
    $lead_id = $_POST['lead_id'];
    $new_status = $_POST['status'];
    $notes = $_POST['notes'] ?? '';
    
    $stmt = $pdo->prepare("UPDATE leads SET status = ?, notes = ? WHERE id = ?");
    $stmt->execute([$new_status, $notes, $lead_id]);
    
    header('Location: admin.php?success=1');
    exit;
}

// Get database connection
$pdo = getDatabaseConnection();

// Get filter parameters
$status_filter = $_GET['status'] ?? 'all';
$search = $_GET['search'] ?? '';

// Build query
$query = "SELECT * FROM leads WHERE 1=1";
$params = [];

if ($status_filter !== 'all') {
    $query .= " AND status = ?";
    $params[] = $status_filter;
}

if (!empty($search)) {
    $query .= " AND (name LIKE ? OR email LIKE ? OR company LIKE ?)";
    $search_param = "%$search%";
    $params[] = $search_param;
    $params[] = $search_param;
    $params[] = $search_param;
}

$query .= " ORDER BY submitted_at DESC";

$stmt = $pdo->prepare($query);
$stmt->execute($params);
$leads = $stmt->fetchAll();

// Get statistics
$stats = [
    'total' => $pdo->query("SELECT COUNT(*) FROM leads")->fetchColumn(),
    'new' => $pdo->query("SELECT COUNT(*) FROM leads WHERE status = 'new'")->fetchColumn(),
    'contacted' => $pdo->query("SELECT COUNT(*) FROM leads WHERE status = 'contacted'")->fetchColumn(),
    'qualified' => $pdo->query("SELECT COUNT(*) FROM leads WHERE status = 'qualified'")->fetchColumn(),
    'converted' => $pdo->query("SELECT COUNT(*) FROM leads WHERE status = 'converted'")->fetchColumn(),
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lead Dashboard - DataArk Labs</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: Arial, sans-serif; 
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: linear-gradient(135deg, #08314d 0%, #1a4a6b 100%);
            color: white;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        h1 { font-size: 24px; }
        .logout-btn {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 8px 20px;
            border-radius: 5px;
            text-decoration: none;
            transition: background 0.3s;
        }
        .logout-btn:hover { background: rgba(255,255,255,0.3); }
        .container { max-width: 1400px; margin: 30px auto; padding: 0 20px; }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .stat-card h3 { color: #666; font-size: 14px; margin-bottom: 10px; }
        .stat-card .number { font-size: 32px; font-weight: bold; color: #08314d; }
        .filters {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .filters form { display: flex; gap: 15px; flex-wrap: wrap; }
        .filters select, .filters input {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        .filters button {
            padding: 10px 20px;
            background: #08314d;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .filters button:hover { opacity: 0.9; }
        .leads-table {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 15px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #f8f9fa; font-weight: 600; color: #333; }
        tr:hover { background: #f8f9fa; }
        .status-badge {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .status-new { background: #e3f2fd; color: #1976d2; }
        .status-contacted { background: #fff3e0; color: #f57c00; }
        .status-qualified { background: #f3e5f5; color: #7b1fa2; }
        .status-converted { background: #e8f5e9; color: #388e3c; }
        .status-closed { background: #eeeeee; color: #757575; }
        .action-btn {
            padding: 5px 15px;
            background: #08314d;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
        }
        .action-btn:hover { opacity: 0.9; }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
        }
        .modal.active { display: flex; justify-content: center; align-items: center; }
        .modal-content {
            background: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        .modal-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .close-modal {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: 600; }
        .form-group select, .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .lead-details { margin-bottom: 20px; }
        .lead-details p { margin-bottom: 10px; padding: 10px; background: #f8f9fa; border-radius: 5px; }
        .lead-details strong { color: #08314d; }
        .success-message {
            background: #e8f5e9;
            color: #388e3c;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <h1>📊 Lead Dashboard - DataArk Labs</h1>
            <a href="?logout=1" class="logout-btn">Logout</a>
        </div>
    </div>
    
    <div class="container">
        <?php if (isset($_GET['success'])): ?>
            <div class="success-message">✓ Lead updated successfully!</div>
        <?php endif; ?>
        
        <div class="stats">
            <div class="stat-card">
                <h3>Total Leads</h3>
                <div class="number"><?= $stats['total'] ?></div>
            </div>
            <div class="stat-card">
                <h3>New</h3>
                <div class="number"><?= $stats['new'] ?></div>
            </div>
            <div class="stat-card">
                <h3>Contacted</h3>
                <div class="number"><?= $stats['contacted'] ?></div>
            </div>
            <div class="stat-card">
                <h3>Qualified</h3>
                <div class="number"><?= $stats['qualified'] ?></div>
            </div>
            <div class="stat-card">
                <h3>Converted</h3>
                <div class="number"><?= $stats['converted'] ?></div>
            </div>
        </div>
        
        <div class="filters">
            <form method="GET">
                <select name="status">
                    <option value="all" <?= $status_filter === 'all' ? 'selected' : '' ?>>All Status</option>
                    <option value="new" <?= $status_filter === 'new' ? 'selected' : '' ?>>New</option>
                    <option value="contacted" <?= $status_filter === 'contacted' ? 'selected' : '' ?>>Contacted</option>
                    <option value="qualified" <?= $status_filter === 'qualified' ? 'selected' : '' ?>>Qualified</option>
                    <option value="converted" <?= $status_filter === 'converted' ? 'selected' : '' ?>>Converted</option>
                    <option value="closed" <?= $status_filter === 'closed' ? 'selected' : '' ?>>Closed</option>
                </select>
                <input type="text" name="search" placeholder="Search by name, email, or company..." value="<?= htmlspecialchars($search) ?>" style="flex: 1; min-width: 250px;">
                <button type="submit">Filter</button>
                <a href="admin.php" style="padding: 10px 20px; background: #666; color: white; text-decoration: none; border-radius: 5px;">Clear</a>
            </form>
        </div>
        
        <div class="leads-table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Service Interest</th>
                        <th>Status</th>
                        <th>Submitted</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($leads as $lead): ?>
                        <tr>
                            <td>#<?= $lead['id'] ?></td>
                            <td><?= htmlspecialchars($lead['name']) ?></td>
                            <td><?= htmlspecialchars($lead['email']) ?></td>
                            <td><?= htmlspecialchars($lead['company']) ?></td>
                            <td><?= htmlspecialchars($lead['service_interest']) ?></td>
                            <td><span class="status-badge status-<?= $lead['status'] ?>"><?= ucfirst($lead['status']) ?></span></td>
                            <td><?= date('M j, Y g:i A', strtotime($lead['submitted_at'])) ?></td>
                            <td>
                                <button class="action-btn" onclick="viewLead(<?= htmlspecialchars(json_encode($lead)) ?>)">View</button>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                    <?php if (empty($leads)): ?>
                        <tr>
                            <td colspan="8" style="text-align: center; padding: 40px; color: #999;">No leads found</td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
    
    <!-- Modal for viewing/editing lead -->
    <div id="leadModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Lead Details</h2>
                <button class="close-modal" onclick="closeModal()">×</button>
            </div>
            <div id="leadDetailsContent"></div>
        </div>
    </div>
    
    <script>
        function viewLead(lead) {
            const modal = document.getElementById('leadModal');
            const content = document.getElementById('leadDetailsContent');
            
            content.innerHTML = `
                <div class="lead-details">
                    <p><strong>Name:</strong> ${lead.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
                    <p><strong>Company:</strong> ${lead.company}</p>
                    <p><strong>Phone:</strong> ${lead.phone || 'Not provided'}</p>
                    <p><strong>Service Interest:</strong> ${lead.service_interest || 'Not specified'}</p>
                    <p><strong>Company Size:</strong> ${lead.company_size || 'Not specified'}</p>
                    <p><strong>Message:</strong><br>${lead.message.replace(/\n/g, '<br>')}</p>
                    <p><strong>Submitted:</strong> ${new Date(lead.submitted_at).toLocaleString()}</p>
                    <p><strong>IP Address:</strong> ${lead.ip_address}</p>
                </div>
                
                <form method="POST">
                    <input type="hidden" name="lead_id" value="${lead.id}">
                    <input type="hidden" name="update_status" value="1">
                    
                    <div class="form-group">
                        <label>Status</label>
                        <select name="status" required>
                            <option value="new" ${lead.status === 'new' ? 'selected' : ''}>New</option>
                            <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                            <option value="qualified" ${lead.status === 'qualified' ? 'selected' : ''}>Qualified</option>
                            <option value="converted" ${lead.status === 'converted' ? 'selected' : ''}>Converted</option>
                            <option value="closed" ${lead.status === 'closed' ? 'selected' : ''}>Closed</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Notes</label>
                        <textarea name="notes" rows="4" placeholder="Add notes about this lead...">${lead.notes || ''}</textarea>
                    </div>
                    
                    <button type="submit" class="action-btn" style="width: 100%; padding: 12px; font-size: 16px;">Update Lead</button>
                </form>
            `;
            
            modal.classList.add('active');
        }
        
        function closeModal() {
            document.getElementById('leadModal').classList.remove('active');
        }
        
        // Close modal when clicking outside
        document.getElementById('leadModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    </script>
</body>
</html>
