# Quick Reference Guide

## Essential Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Database
```bash
npx prisma studio    # Open database GUI (http://localhost:5555)
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema to database
npx prisma db pull   # Pull schema from database
```

### PM2 (Production)
```bash
pm2 start ecosystem.config.js    # Start application
pm2 stop dataarklabs             # Stop application
pm2 restart dataarklabs          # Restart application
pm2 logs dataarklabs             # View logs
pm2 monit                        # Monitor resources
pm2 list                         # List all processes
pm2 delete dataarklabs           # Delete process
```

### Nginx
```bash
sudo nginx -t                    # Test configuration
sudo systemctl reload nginx      # Reload Nginx
sudo systemctl restart nginx     # Restart Nginx
sudo systemctl status nginx      # Check status
```

## File Structure

```
dataarklabs-nextjs/
├── app/
│   ├── api/leads/route.ts      # Lead submission API
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── ui/                     # Shadcn components
│   ├── Header.tsx              # Navigation
│   ├── Hero.tsx                # Hero section
│   ├── Services.tsx            # Services section
│   ├── Process.tsx             # Process section
│   ├── CaseStudies.tsx         # Case studies
│   ├── ContactForm.tsx         # Contact form
│   └── Footer.tsx              # Footer
├── lib/
│   ├── db.ts                   # Prisma client
│   └── utils.ts                # Utilities
├── prisma/
│   └── schema.prisma           # Database schema
└── public/                     # Static files
```

## Environment Variables

```env
# Required
DATABASE_URL="mysql://user:pass@localhost:3306/db"
NEXT_PUBLIC_SITE_URL="https://www.dataarklabs.com"

# Optional
ADMIN_EMAIL="hello@dataarklabs.com"
SMTP_HOST="smtp.hostinger.com"
SMTP_PORT="465"
SMTP_USER="your-email@domain.com"
SMTP_PASS="your-password"
```

## Common Tasks

### Add a new component
```bash
# Create file in components/
touch components/NewComponent.tsx
```

### Add a new API route
```bash
# Create file in app/api/
mkdir -p app/api/new-route
touch app/api/new-route/route.ts
```

### Update database schema
```bash
# 1. Edit prisma/schema.prisma
# 2. Push changes
npx prisma db push
# 3. Regenerate client
npx prisma generate
```

### View database
```bash
npx prisma studio
# Opens at http://localhost:5555
```

### Check logs
```bash
# Development
# Logs appear in terminal

# Production
pm2 logs dataarklabs

# Nginx
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## Troubleshooting

### Site not loading
```bash
# Check if app is running
pm2 list

# Check logs
pm2 logs dataarklabs

# Restart
pm2 restart dataarklabs
```

### Database connection error
```bash
# Test connection
npx prisma db pull

# Check .env
cat .env | grep DATABASE_URL

# Verify MySQL is running
sudo systemctl status mysql
```

### Build errors
```bash
# Clear cache
rm -rf .next
npm run build

# Check for TypeScript errors
npm run lint
```

### Port already in use
```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill process
kill -9 <PID>

# Or restart PM2
pm2 delete all
pm2 start ecosystem.config.js
```

## URLs

### Development
- Website: http://localhost:3000
- Prisma Studio: http://localhost:5555

### Production
- Website: https://www.dataarklabs.com
- Admin (if using PHP): https://admin.dataarklabs.com

## Database Schema

```prisma
model Lead {
  id              Int      @id @default(autoincrement())
  name            String
  email           String
  company         String
  phone           String?
  serviceInterest String?
  companySize     String?
  message         String   @db.Text
  status          String   @default("new")
  notes           String?  @db.Text
  ipAddress       String?
  userAgent       String?  @db.Text
  submittedAt     DateTime @default(now())
}
```

## API Endpoints

### POST /api/leads
Submit a new lead

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "phone": "555-1234",
  "service": "workflow-automation",
  "companySize": "11-50",
  "message": "We need help with automation"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We'll be in touch within 24 hours.",
  "leadId": 123
}
```

## Deployment Checklist

- [ ] Update .env with production values
- [ ] Run `npm install --production`
- [ ] Run `npx prisma generate`
- [ ] Run `npx prisma db push`
- [ ] Run `npm run build`
- [ ] Start with PM2: `pm2 start ecosystem.config.js`
- [ ] Configure Nginx
- [ ] Setup SSL certificate
- [ ] Test website
- [ ] Monitor logs

## Backup Commands

### Database
```bash
# Backup
mysqldump -u user -p database > backup.sql

# Restore
mysql -u user -p database < backup.sql
```

### Files
```bash
# Backup
tar -czf backup.tar.gz /var/www/dataarklabs

# Restore
tar -xzf backup.tar.gz -C /var/www/
```

## Performance Tips

1. **Enable Nginx caching** for static files
2. **Use CDN** for images (optional)
3. **Enable Gzip** compression in Nginx
4. **Monitor with PM2**: `pm2 monit`
5. **Regular updates**: Keep dependencies updated

## Security Checklist

- [x] SSL certificate installed
- [x] Environment variables secured
- [x] Rate limiting enabled
- [x] Input validation with Zod
- [x] Prisma prevents SQL injection
- [ ] Firewall configured (UFW)
- [ ] Regular backups scheduled
- [ ] Server updates automated

## Support Resources

- **Documentation**: README.md, DEPLOYMENT.md, MIGRATION_GUIDE.md
- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Hostinger Support**: https://www.hostinger.com/support

## Quick Fixes

### Clear everything and restart
```bash
pm2 delete all
rm -rf .next node_modules
npm install
npm run build
pm2 start ecosystem.config.js
```

### Reset database
```bash
npx prisma db push --force-reset
```

### View all environment variables
```bash
cat .env
```

### Check disk space
```bash
df -h
```

### Check memory usage
```bash
free -h
```

## Contact

For issues or questions:
- Email: hello@dataarklabs.com
- Check logs: `pm2 logs dataarklabs`
- Review documentation in this repository
