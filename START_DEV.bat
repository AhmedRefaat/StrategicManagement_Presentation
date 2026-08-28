@echo off
setlocal
cd /d "%~dp0"

echo =====================================================
echo  Al Rawae Strategic Management Presentation - DEV
echo =====================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js was not found in PATH.
  echo Install Node.js 18 or newer, reopen this folder, and try again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo [INFO] Installing npm dependencies for the first run...
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERROR] npm install failed. Check the network or npm configuration.
    pause
    exit /b 1
  )
)

echo [INFO] Starting Vite. The browser opens by itself once the server is ready.
echo [INFO] Press Ctrl+C to stop.
echo.
call npm run dev

if errorlevel 1 (
  echo.
  echo [ERROR] The development server stopped with an error.
  pause
  exit /b 1
)
endlocal
