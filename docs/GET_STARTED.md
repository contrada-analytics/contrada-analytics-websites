# 🚀 Get Started with DataArk Labs Next.js

Welcome! This guide will help you get your new Next.js website up and running.

## 📋 What You Have

Your website has been migrated from PHP to a modern Next.js stack:

- ✅ **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- ✅ **UI Components**: Shadcn/ui (beautiful, accessible components)
- ✅ **Database**: MySQL with Prisma ORM
- ✅ **Deployment**: PM2 + Nginx ready
- ✅ **All Features**: Contact form, lead management, responsive design

## 🎯 Quick Start (3 Steps)

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Setup Database

```bash
# Copy environment file
cp .env.example .env

# Edit .env with your database credentials
# DATABASE_URL="mysql://username:password@localhost:3306/database_name"

# Setup database
npx prisma generate
npx prisma db push
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 🎉

## 📚 Documentation

We've created comprehensive guides for you:

### Essential Reading

1. **[README.md](README.md)** - Overview and setup instructions
2. **[DEPLOYMENT.md](DEPLOYMENT.md)** - Step-by-step deployment to Hostinger
3. **[MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)** - Migrating from your PHP site

### Reference Guides

4. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Commands and quick fixes
5. **[TECH_COMPARISON.md](TECH_COMPARISON.md)** - Old vs new stack comparison
6. **[ARCHITECTURE.md](ARCHITECTURE.md)** - System architecture diagrams

## 🎨 What's Included

### Pages & Components

- ✅ **Header** - Navigation with smooth scrolling
- ✅ **Hero** - Eye-catching hero section
- ✅ **Stats** - Key metrics display
- ✅ **Services** - Three service cards
- ✅ **Process** - Four-step process
- ✅ **Case Studies** - Three success stories
- ✅ **Contact Form** - Lead capture with validation
- ✅ **Footer** - Links and contact info

### Features

- ✅ **Form Validation** - Client and server-side
- ✅ **Rate Limiting** - Prevent spam (5 submissions/hour)
- ✅ **Database Storage** - Leads saved to MySQL
- ✅ **Responsive Design** - Mobile-friendly
- ✅ **Type Safety** - Full TypeScript
- ✅ **SEO Optimized** - Meta tags and structure

## 🛠️ Development Workflow

### Local Development

```bash
# Start dev server
npm run dev

# View database
npx prisma studio

# Check for errors
npm run lint
```

### Making Changes

1. **Edit components** in `components/` folder
2. **Edit pages** in `app/` folder
3. **Edit styles** using Tailwind classes
4. **Changes auto-reload** in browser

### Adding Features

```bash
# Add a new component
touch components/NewFeature.tsx

# Add a new API route
mkdir -p app/api/new-route
touch app/api/new-route/route.ts

# Update database schema
# Edit prisma/schema.prisma, then:
npx prisma db push
npx prisma generate
```

## 🚀 Deployment to Hostinger

### Prerequisites

- ✅ Hostinger VPS with SSH access
- ✅ Node.js 18+ installed
- ✅ MySQL database created
- ✅ Domain pointed to server

### Quick Deploy

```bash
# 1. Upload files to server
git clone your-repo /var/www/dataarklabs
cd /var/www/dataarklabs

# 2. Install dependencies
npm install --production

# 3. Configure environment
cp .env.example .env
nano .env  # Add your database credentials

# 4. Setup database
npx prisma generate
npx prisma db push

# 5. Build
npm run build

# 6. Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# 7. Configure Nginx (see DEPLOYMENT.md)
```

**Full deployment guide**: [DEPLOYMENT.md](DEPLOYMENT.md)

## 📊 Database Management

### View Leads

```bash
# Open Prisma Studio
npx prisma studio
```

Visit http://localhost:5555 to see your database in a GUI.

### Query Database

```bash
# Connect to MySQL
mysql -u username -p database_name

# View leads
SELECT * FROM leads ORDER BY submitted_at DESC LIMIT 10;

# Count leads
SELECT COUNT(*) FROM leads;
```

## 🔧 Common Tasks

### Update Content

Edit the component files:
- `components/Hero.tsx` - Hero text
- `components/Services.tsx` - Services content
- `components/CaseStudies.tsx` - Case studies
- `components/Footer.tsx` - Footer info

### Change Colors

Edit `tailwind.config.ts` or use Tailwind classes:
- Primary color: `#673DE6` (purple)
- Secondary: `#08314d` (dark blue)

### Add Email Notifications

Install nodemailer:
```bash
npm install nodemailer
```

Update `app/api/leads/route.ts` to send emails.

## 🐛 Troubleshooting

### Site won't start

```bash
# Check logs
pm2 logs dataarklabs

# Restart
pm2 restart dataarklabs
```

### Database connection error

```bash
# Test connection
npx prisma db pull

# Check credentials
cat .env | grep DATABASE_URL
```

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**More solutions**: [QUICK_REFERENCE.md](QUICK_REFERENCE.md)

## 📈 Next Steps

### Immediate

1. ✅ Get local development running
2. ✅ Test all features
3. ✅ Customize content
4. ✅ Deploy to staging/production

### Soon

- [ ] Add email notifications
- [ ] Build admin dashboard
- [ ] Setup monitoring
- [ ] Configure backups
- [ ] Add analytics

### Future

- [ ] A/B testing
- [ ] Multi-language support
- [ ] CRM integration
- [ ] Advanced features

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)

### Prisma
- [Prisma Documentation](https://www.prisma.io/docs)

## 💡 Tips

1. **Start with development** - Get comfortable locally first
2. **Test thoroughly** - Try all features before deploying
3. **Read the docs** - We've documented everything
4. **Use Prisma Studio** - Great for viewing database
5. **Check logs** - `pm2 logs` is your friend
6. **Take backups** - Before major changes

## 🆘 Getting Help

### Check Documentation

1. [README.md](README.md) - General info
2. [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment help
3. [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Quick fixes
4. [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) - Migration help

### Debug Steps

1. Check logs: `pm2 logs dataarklabs`
2. Test database: `npx prisma studio`
3. Verify environment: `cat .env`
4. Check Nginx: `sudo nginx -t`

### Common Commands

```bash
# Development
npm run dev              # Start dev server
npx prisma studio        # View database

# Production
pm2 logs dataarklabs     # View logs
pm2 restart dataarklabs  # Restart app
pm2 monit                # Monitor resources

# Database
npx prisma db push       # Update schema
npx prisma generate      # Regenerate client
```

## ✅ Checklist

### Before Deployment

- [ ] Local development works
- [ ] All features tested
- [ ] Content customized
- [ ] Database configured
- [ ] Environment variables set
- [ ] Build succeeds
- [ ] Documentation reviewed

### After Deployment

- [ ] Website loads
- [ ] Form submissions work
- [ ] Leads save to database
- [ ] SSL certificate active
- [ ] Mobile responsive
- [ ] PM2 running
- [ ] Backups configured

## 🎉 You're Ready!

You now have a modern, performant website built with:
- ⚡ Next.js 14 (latest)
- 🎨 Tailwind CSS (beautiful styling)
- 🔒 TypeScript (type safety)
- 🗄️ Prisma (database ORM)
- 🚀 PM2 (process management)

**Start with**: `npm install && npm run dev`

**Questions?** Check the documentation files or review the code comments.

Good luck! 🚀
