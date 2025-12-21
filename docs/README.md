# DataArk Labs - Next.js Website

Modern website built with Next.js 14, TypeScript, Tailwind CSS, and Prisma ORM.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: PM2, Nginx on VPS

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

**PostgreSQL Setup on VPS:**

```bash
# Install PostgreSQL (if not already installed)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Switch to postgres user
sudo -u postgres psql

# Inside psql, create database and user:
CREATE DATABASE dataarklabs;
CREATE USER dataarklabs_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE dataarklabs TO dataarklabs_user;
\q

# Copy environment variables
cp .env.example .env

# Edit .env with your database credentials
nano .env
# DATABASE_URL="postgresql://dataarklabs_user:your_secure_password@localhost:5432/dataarklabs?schema=public"
```

### 3. Initialize Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma db push
```

### 4. Development

```bash
npm run dev
```

Visit http://localhost:3000

### 5. Production Build

```bash
npm run build
npm start
```

## Deployment to Hostinger

### Prerequisites

1. SSH access to your VPS
2. Node.js 18+ installed
3. PostgreSQL installed and running
4. PM2 installed globally: `npm install -g pm2`

### Deployment Steps

1. **Upload files to server**
```bash
# Via Git
git clone your-repo-url
cd dataarklabs-nextjs

# Or upload via FTP/SFTP
```

2. **Install dependencies**
```bash
npm install --production
```

3. **Setup PostgreSQL database**
```bash
# Create database and user
sudo -u postgres psql
CREATE DATABASE dataarklabs;
CREATE USER dataarklabs_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE dataarklabs TO dataarklabs_user;
\q
```

4. **Configure environment**
```bash
cp .env.example .env
nano .env  # Edit with your PostgreSQL credentials
# DATABASE_URL="postgresql://dataarklabs_user:your_secure_password@localhost:5432/dataarklabs?schema=public"
```

5. **Initialize database schema**
```bash
npx prisma generate
npx prisma db push
```

6. **Build application**
```bash
npm run build
```

7. **Start with PM2**
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Nginx Configuration

Create `/etc/nginx/sites-available/dataarklabs`:

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
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/dataarklabs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d dataarklabs.com -d www.dataarklabs.com
```

## Project Structure

```
├── src/                   # Application source code
│   ├── app/              # Next.js App Router
│   │   ├── api/         # API routes
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   └── lib/             # Utilities
│       ├── db.ts        # Prisma client
│       └── utils.ts     # Helper functions
├── prisma/              # Database schema
│   └── schema.prisma
├── public/              # Static assets
└── docs/                # Documentation
```

## Features

- ✅ Modern, responsive design
- ✅ Lead capture form with validation
- ✅ Database integration with Prisma
- ✅ Rate limiting on form submissions
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Production-ready with PM2
- ✅ SEO optimized

## Maintenance

### View logs
```bash
pm2 logs dataarklabs
```

### Restart application
```bash
pm2 restart dataarklabs
```

### Update application
```bash
git pull
npm install
npm run build
pm2 restart dataarklabs
```

## Support

For issues or questions, contact: hello@dataarklabs.com
