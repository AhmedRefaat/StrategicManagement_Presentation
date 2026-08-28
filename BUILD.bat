@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js 18 or newer is required.
  pause
  exit /b 1
)
if not exist node_modules call npm install
call npm run build
if errorlevel 1 (
  echo [ERROR] Build failed.
  pause
  exit /b 1
)
echo.
echo [OK] Build created under dist\
pause
endlocal
