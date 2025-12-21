# Migration Guide: PHP to Next.js

## Overview

This guide helps you migrate from your existing PHP website to the new Next.js application.

## What's Changed

### Technology Stack

| Old Stack | New Stack |
|-----------|-----------|
| PHP | Next.js 14 + TypeScript |
| Plain HTML/CSS | React + Tailwind CSS |
| MySQL (direct) | MySQL + Prisma ORM |
| Apache/PHP | Node.js + PM2 + Nginx |

### File Mapping

| Old File | New Location | Notes |
|----------|--------------|-------|
| `files/index.html` | `app/page.tsx` + components | Split into React components |
| `files/submit-form.php` | `app/api/leads/route.ts` | API route with validation |
| `files/config.php` | `.env` | Environment variables |
| `files/admin.php` | Not included | See Admin Dashboard section |

## Database Migration

Your existing database structure is compatible! The Prisma schema matches your current `leads` table.

### Option 1: Keep Existing Data

If you want to keep your existing leads:

1. Your current table structure should work as-is
2. Just update `.env` with your existing database credentials
3. Run `npx prisma db pull` to sync the schema
4. Run `npx prisma generate` to generate the client

### Option 2: Fresh Start

If you want a clean database:

1. Create a new database in Hostinger
2. Update `.env` with new credentials
3. Run `npx prisma db push` to create tables

## Admin Dashboard

The current Next.js setup doesn't include an admin dashboard. You have several options:

### Option 1: Keep PHP Admin (Quick Solution)

Keep your existing `admin.php` running alongside Next.js:

1. Place `admin.php` and `config.php` in a separate directory
2. Configure Nginx to serve PHP files:

```nginx
location /admin {
    alias /var/www/dataarklabs-admin;
    index admin.php;
    
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index admin.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $request_filename;
    }
}
```

### Option 2: Build Next.js Admin (Recommended)

Create a protected admin area in Next.js:

1. Add authentication (NextAuth.js)
2. Create admin pages in `app/admin`
3. Build dashboard with React components

I can help you build this if needed!

### Option 3: Use Third-Party Tools

- **Prisma Studio**: Built-in database GUI
  ```bash
  npx prisma studio
  ```
  Access at http://localhost:5555

- **Retool**: Build custom admin dashboards
- **Forest Admin**: Auto-generated admin panel

## Deployment Strategy

### Zero-Downtime Migration

1. **Prepare** (Do this first)
   - Set up Next.js on a subdomain (e.g., new.dataarklabs.com)
   - Test thoroughly
   - Ensure database works

2. **Deploy** (When ready)
   - Point main domain to Next.js
   - Keep PHP backup accessible
   - Monitor for issues

3. **Rollback Plan** (If needed)
   - Keep old PHP files
   - Can switch back via Nginx config

### Parallel Running

Run both sites simultaneously during transition:

```nginx
# Main site - Next.js
server {
    server_name dataarklabs.com www.dataarklabs.com;
    location / {
        proxy_pass http://localhost:3000;
    }
}

# Old site - PHP (backup)
server {
    server_name old.dataarklabs.com;
    root /var/www/old-site;
    index index.html;
}

# Admin - PHP
server {
    server_name admin.dataarklabs.com;
    root /var/www/admin;
    index admin.php;
    # PHP configuration...
}
```

## Testing Checklist

Before going live, test:

- [ ] Homepage loads correctly
- [ ] All sections display properly
- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] Leads save to database
- [ ] Rate limiting works
- [ ] Mobile responsive design
- [ ] SSL certificate active
- [ ] Email notifications (if configured)
- [ ] Admin access (if using PHP admin)

## Data Validation

After migration, verify:

```bash
# Check database connection
npx prisma studio

# View recent leads
mysql -u username -p database_name -e "SELECT * FROM leads ORDER BY submitted_at DESC LIMIT 5;"

# Count total leads
mysql -u username -p database_name -e "SELECT COUNT(*) FROM leads;"
```

## Common Issues

### Issue: Form submissions not saving

**Solution**: Check database connection
```bash
# Test Prisma connection
npx prisma db pull

# Check .env file
cat .env | grep DATABASE_URL
```

### Issue: Old PHP admin can't access database

**Solution**: Ensure both can access same database
- Update `config.php` with correct credentials
- Verify MySQL user has proper permissions

### Issue: Styling looks different

**Solution**: Tailwind CSS uses different approach
- Colors are close matches to original
- Animations preserved
- Responsive design improved

## Rollback Procedure

If you need to rollback to PHP:

1. **Update Nginx config**:
```nginx
server {
    server_name dataarklabs.com;
    root /var/www/old-site/files;
    index index.html;
}
```

2. **Reload Nginx**:
```bash
sudo systemctl reload nginx
```

3. **Stop Next.js**:
```bash
pm2 stop dataarklabs
```

## Email Notifications

The PHP version had email notifications. To add this to Next.js:

### Option 1: Use Hostinger SMTP

Install nodemailer:
```bash
npm install nodemailer
```

Update `app/api/leads/route.ts` to send emails.

### Option 2: Use Email Service

- SendGrid
- Mailgun
- AWS SES
- Resend

I can help implement this if needed!

## Performance Comparison

### Old PHP Site
- Server-side rendering per request
- No caching
- Slower page loads

### New Next.js Site
- Static generation where possible
- Optimized images
- Faster page loads
- Better SEO
- Improved mobile performance

## Getting Help

If you encounter issues during migration:

1. Check logs: `pm2 logs dataarklabs`
2. Test database: `npx prisma studio`
3. Verify Nginx: `sudo nginx -t`
4. Review this guide
5. Check README.md and DEPLOYMENT.md

## Next Steps

After successful migration:

1. Set up monitoring (PM2, server monitoring)
2. Configure automated backups
3. Set up CI/CD (GitHub Actions)
4. Add email notifications
5. Build Next.js admin dashboard
6. Implement analytics (Google Analytics, Plausible)
7. Add more features as needed

## Timeline Suggestion

- **Week 1**: Setup and testing on staging
- **Week 2**: Final testing and preparation
- **Week 3**: Deploy to production
- **Week 4**: Monitor and optimize

Take your time and test thoroughly before switching!
