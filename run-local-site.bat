@echo off
cd /d "%~dp0"

echo Starting local Jekyll server...
echo Close this window when done.
echo.

start "" cmd /c "timeout /t 8 >nul && start http://127.0.0.1:4000/"

bundle exec jekyll serve

pause
