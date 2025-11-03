@echo off
REM ATS Development Setup Script for Windows
REM This script sets up the development environment for the ATS application

echo 🚀 Setting up ATS Development Environment...

REM Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not running. Please start Docker and try again.
    exit /b 1
)
echo ✅ Docker is running

REM Check if Docker Compose is available
docker compose version >nul 2>&1
if %errorlevel% neq 0 (
    docker-compose --version >nul 2>&1
    if %errorlevel% neq 0 (
        echo ❌ Docker Compose is not available. Please install Docker Compose.
        exit /b 1
    )
)
echo ✅ Docker Compose is available

REM Start development services
echo 🐳 Starting development services with Docker Compose...
docker compose -f docker-compose.dev.yml up -d
if %errorlevel% neq 0 (
    docker-compose -f docker-compose.dev.yml up -d
)

echo ⏳ Waiting for services to be ready...
timeout /t 10 /nobreak >nul

REM Install dependencies
echo 📦 Installing dependencies...

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install Node.js and npm.
    exit /b 1
)

REM Install root dependencies
call npm install

REM Install API dependencies
cd apps\api
call npm install
cd ..\..

REM Install shared-kernel dependencies
cd packages\shared-kernel
call npm install
cd ..\..

echo ✅ Dependencies installed

REM Setup database
echo 🗄️ Setting up database...
echo ⏳ Waiting for PostgreSQL to be ready...

REM Wait for PostgreSQL to be ready (simplified for Windows)
timeout /t 15 /nobreak >nul

echo ✅ PostgreSQL should be ready

REM Run Prisma migrations
cd apps\api
call npx prisma generate
call npx prisma db push
cd ..\..

echo ✅ Database schema updated

echo.
echo 🎉 ATS Development Environment is ready!
echo.
echo 📋 Quick Start Commands:
echo   • Start API:          cd apps\api && npm run dev
echo   • Start Web App:      cd apps\web && npm run dev
echo   • View Database:      http://localhost:5050 (admin@ats.com / admin123)
echo   • Redis Commander:    http://localhost:8081
echo   • API Documentation:  http://localhost:3002/api/docs
echo.
echo 🛠️ Development Commands:
echo   • Run tests:          npm run test
echo   • Lint code:          npm run lint
echo   • Format code:        npm run format
echo   • Database studio:    cd apps\api && npx prisma studio
echo.
echo Happy coding! 🚀

pause