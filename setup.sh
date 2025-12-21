#!/bin/bash

# DataArk Labs - Setup Script
# This script helps you set up the Next.js application

echo "🚀 DataArk Labs - Setup Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚙️  Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created"
    echo "⚠️  Please edit .env with your database credentials"
    echo ""
else
    echo "✅ .env file already exists"
    echo ""
fi

# Ask if user wants to setup database
read -p "Do you want to setup the database now? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗄️  Setting up database..."
    
    # Generate Prisma client
    npx prisma generate
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to generate Prisma client"
        echo "Please check your DATABASE_URL in .env"
        exit 1
    fi
    
    # Push database schema
    npx prisma db push
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to push database schema"
        echo "Please check your database connection"
        exit 1
    fi
    
    echo "✅ Database setup complete"
    echo ""
fi

# Ask if user wants to build for production
read -p "Do you want to build for production? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🏗️  Building for production..."
    npm run build
    
    if [ $? -ne 0 ]; then
        echo "❌ Build failed"
        exit 1
    fi
    
    echo "✅ Build complete"
    echo ""
fi

echo "================================"
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env with your database credentials (if not done)"
echo "2. Run 'npm run dev' for development"
echo "3. Run 'npm run build && npm start' for production"
echo "4. Or use PM2: 'pm2 start ecosystem.config.js'"
echo ""
echo "📚 Documentation:"
echo "- README.md - General information"
echo "- DEPLOYMENT.md - Deployment guide"
echo "- MIGRATION_GUIDE.md - Migration from PHP"
echo ""
echo "🎉 Happy coding!"
