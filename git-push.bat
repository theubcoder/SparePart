@echo off
echo Pushing to GitHub repository: SparePart
echo ==========================================
echo.

REM Set configurations for large repository
git config --global http.postBuffer 524288000
git config --global core.compression 0
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

REM Push to GitHub
echo Pushing to origin/main...
echo This may take several minutes for a large repository...
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ==========================================
    echo SUCCESS! Code pushed to GitHub
    echo Repository: https://github.com/theubcoder/SparePart
    echo ==========================================
) else (
    echo.
    echo ==========================================
    echo ERROR: Push failed. Please try:
    echo 1. Check your internet connection
    echo 2. Verify GitHub credentials
    echo 3. Try pushing with: git push -u origin main --force
    echo ==========================================
)

pause