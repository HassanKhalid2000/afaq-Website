#!/bin/bash

# AFAQ Website Deployment Script
# This script automates the deployment process on VPS

set -e  # Exit on error

echo "🚀 Starting AFAQ Website Deployment..."
echo "======================================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}→ $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found! Are you in the project directory?"
    exit 1
fi

print_success "Found package.json"

# Pull latest changes (if using git)
if [ -d ".git" ]; then
    print_info "Pulling latest changes from Git..."
    git pull origin main || git pull origin master
    print_success "Git pull completed"
else
    print_info "Not a git repository, skipping git pull"
fi

# Install/update dependencies
print_info "Installing dependencies..."
npm install
print_success "Dependencies installed"

# Create logs directory if it doesn't exist
if [ ! -d "logs" ]; then
    print_info "Creating logs directory..."
    mkdir -p logs
    print_success "Logs directory created"
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    print_error ".env.local not found!"
    echo "Please create .env.local with required environment variables:"
    echo "  RESEND_API_KEY=your_key"
    echo "  FROM_EMAIL=noreply@afaqinfotech.com"
    echo "  TO_EMAIL=info@afaqinfotech.com"
    exit 1
fi

print_success ".env.local found"

# Build the application
print_info "Building Next.js application..."
npm run build
print_success "Build completed successfully"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 not found! Installing PM2..."
    npm install -g pm2
    print_success "PM2 installed"
fi

# Check if app is already running
if pm2 list | grep -q "afaq-website"; then
    print_info "Application already running, restarting..."
    pm2 restart afaq-website
    print_success "Application restarted"
else
    print_info "Starting application with PM2..."
    pm2 start ecosystem.config.js
    print_success "Application started"
fi

# Save PM2 process list
pm2 save

# Show status
print_info "Current PM2 status:"
pm2 list

echo ""
print_success "Deployment completed successfully! 🎉"
echo ""
echo "Useful commands:"
echo "  pm2 logs afaq-website     - View logs"
echo "  pm2 restart afaq-website  - Restart app"
echo "  pm2 stop afaq-website     - Stop app"
echo "  pm2 monit                 - Monitor app"
echo ""
