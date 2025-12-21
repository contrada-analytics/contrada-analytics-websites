# Deployment Guide for Hostinger

## Quick Start Checklist

- [ ] Node.js 18+ installed on server
- [ ] MySQL database created in Hostinger panel
- [ ] Database credentials ready
- [ ] SSH access to server
- [ ] Domain pointed to server IP

## Step-by-Step Deployment

### 1. Prepare Your Server

SSH into your Hostinger VPS:
```bash
ssh username@your-server-ip
```

Install Node.js (if not installed):
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Install PM2 globally:
```bash
sudo npm install -g pm2
```

### 2. Upload Your Project

Option A - Using Git (Recommended):
```bash
cd /var/www
git clone your-repository-url dataarklabs
cd dataarklabs
```

Option B - Using FTP/SFTP:
- Upload all files to `/var/www/dataarklabs`
- Connect via SSH and navigate to the directory

### 3. Install Dependencies

```bash
npm install --production
```

### 4. Configure Environment

```bash
cp .env.example .env
nano .env
```

Update with your Hostinger database credentials:
```env
DATABASE_URL="mysql://u537171573_saaaab:.O-ZLAgRb7@localhost:3306/u537171573_saaaab"
NEXT_PUBLIC_SITE_URL="https://www.dataarklabs.com"
ADMIN_EMAIL="hello@dataarklabs.com"
```

### 5. Setup Database

```bash
npx prisma generate
npx prisma db push
```

This creates the `leads` table in your MySQL database.

### 6. Build the Application

```bash
npm run build
```

### 7. Start with PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

Copy and run the command that PM2 outputs.

### 8. Configure Nginx

Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/dataarklabs
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name dataarklabs.com www.dataarklabs.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/dataarklabs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 9. Setup SSL Certificate

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d dataarklabs.com -d www.dataarklabs.com
```

Follow the prompts to complete SSL setup.

### 10. Verify Deployment

Visit your domain: https://www.dataarklabs.com

Check PM2 status:
```bash
pm2 status
pm2 logs dataarklabs
```

## Updating Your Site

When you need to update:

```bash
cd /var/www/dataarklabs
git pull  # or upload new files
npm install
npm run build
pm2 restart dataarklabs
```

## Troubleshooting

### Application won't start
```bash
pm2 logs dataarklabs --lines 50
```

### Database connection issues
- Verify DATABASE_URL in .env
- Check MySQL is running: `sudo systemctl status mysql`
- Test connection: `npx prisma db pull`

### Nginx issues
```bash
sudo nginx -t
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
```

### Port already in use
```bash
sudo lsof -i :3000
pm2 delete all
pm2 start ecosystem.config.js
```

## Monitoring

### View application logs
```bash
pm2 logs dataarklabs
```

### Monitor resources
```bash
pm2 monit
```

### View all processes
```bash
pm2 list
```

## Backup

### Backup database
```bash
mysqldump -u username -p database_name > backup.sql
```

### Backup files
```bash
tar -czf dataarklabs-backup.tar.gz /var/www/dataarklabs
```

## Security Checklist

- [x] SSL certificate installed
- [x] Environment variables secured (.env not in git)
- [x] Database credentials protected
- [x] Rate limiting enabled on forms
- [x] Nginx security headers configured
- [ ] Firewall configured (UFW)
- [ ] Regular backups scheduled
- [ ] Server updates automated

## Performance Optimization

### Enable Nginx caching
Add to your Nginx config:
```nginx
location /_next/static {
    alias /var/www/dataarklabs/.next/static;
    expires 365d;
    access_log off;
}
```

### Enable Gzip compression
Add to Nginx config:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

## Support

If you encounter issues:
1. Check PM2 logs: `pm2 logs`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Verify environment variables: `cat .env`
4. Test database connection: `npx prisma db pull`

For Hostinger-specific issues, contact their support with your VPS details.
