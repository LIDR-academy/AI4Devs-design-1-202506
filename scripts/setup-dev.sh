#!/bin/bash

# ATS Development Setup Script
# This script sets up the development environment for the ATS application

set -e

echo "🚀 Setting up ATS Development Environment..."

# Function to check if Docker is running
check_docker() {
    if ! docker info >/dev/null 2>&1; then
        echo "❌ Docker is not running. Please start Docker and try again."
        exit 1
    fi
    echo "✅ Docker is running"
}

# Function to check if Docker Compose is available
check_docker_compose() {
    if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
        echo "❌ Docker Compose is not available. Please install Docker Compose."
        exit 1
    fi
    echo "✅ Docker Compose is available"
}

# Function to start development services
start_services() {
    echo "🐳 Starting development services with Docker Compose..."
    
    # Use docker compose if available, fall back to docker-compose
    if docker compose version &> /dev/null; then
        docker compose -f docker-compose.dev.yml up -d
    else
        docker-compose -f docker-compose.dev.yml up -d
    fi
    
    echo "⏳ Waiting for services to be ready..."
    sleep 10
}

# Function to install dependencies
install_dependencies() {
    echo "📦 Installing dependencies..."
    
    # Check if npm is available
    if ! command -v npm &> /dev/null; then
        echo "❌ npm is not installed. Please install Node.js and npm."
        exit 1
    fi
    
    # Install root dependencies
    npm install
    
    # Install API dependencies
    cd apps/api
    npm install
    cd ../..
    
    # Install shared-kernel dependencies
    cd packages/shared-kernel
    npm install
    cd ../..
    
    echo "✅ Dependencies installed"
}

# Function to setup database
setup_database() {
    echo "🗄️  Setting up database..."
    
    # Wait for PostgreSQL to be ready
    echo "⏳ Waiting for PostgreSQL to be ready..."
    timeout=60
    while ! docker exec $(docker ps -q -f "name=postgres") pg_isready -U ats_user -d ats_db &> /dev/null; do
        timeout=$((timeout - 1))
        if [ $timeout -le 0 ]; then
            echo "❌ PostgreSQL is not ready after 60 seconds"
            exit 1
        fi
        sleep 1
    done
    
    echo "✅ PostgreSQL is ready"
    
    # Run Prisma migrations
    cd apps/api
    npx prisma generate
    npx prisma db push
    cd ../..
    
    echo "✅ Database schema updated"
}

# Function to verify setup
verify_setup() {
    echo "🔍 Verifying setup..."
    
    # Check if services are running
    if docker ps | grep -q postgres && docker ps | grep -q redis; then
        echo "✅ Database services are running"
    else
        echo "❌ Some services are not running"
        exit 1
    fi
    
    # Check if API can start (quick test)
    cd apps/api
    timeout 10s npm run build || {
        echo "❌ API build failed"
        exit 1
    }
    cd ../..
    
    echo "✅ Setup verification complete"
}

# Main execution
main() {
    echo "Starting ATS development environment setup..."
    
    check_docker
    check_docker_compose
    install_dependencies
    start_services
    setup_database
    verify_setup
    
    echo ""
    echo "🎉 ATS Development Environment is ready!"
    echo ""
    echo "📋 Quick Start Commands:"
    echo "  • Start API:          cd apps/api && npm run dev"
    echo "  • Start Web App:      cd apps/web && npm run dev"
    echo "  • View Database:      http://localhost:5050 (admin@ats.com / admin123)"
    echo "  • Redis Commander:    http://localhost:8081"
    echo "  • API Documentation:  http://localhost:3002/api/docs"
    echo ""
    echo "🛠️  Development Commands:"
    echo "  • Run tests:          npm run test"
    echo "  • Lint code:          npm run lint"
    echo "  • Format code:        npm run format"
    echo "  • Database studio:    cd apps/api && npx prisma studio"
    echo ""
    echo "Happy coding! 🚀"
}

main "$@"