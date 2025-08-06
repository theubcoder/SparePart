@echo off
echo Pushing Spare Parts Theme to GitHub...
echo.

REM Configure Git
git config --global http.postBuffer 524288000
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

REM Ensure we're on main branch
git branch -M main

REM Add all files
echo Adding all files...
git add -A

REM Commit if there are changes
echo Committing changes...
git commit -m "Update Spare Parts theme with Arabic support" 2>nul

REM Set remote
echo Setting remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/theubcoder/Spare-part.git

REM Push to GitHub
echo.
echo Pushing to GitHub...
echo This may take a few minutes for large repositories...
git push -u origin main --force

echo.
echo Done! Your code has been pushed to GitHub.
echo Repository: https://github.com/theubcoder/Spare-part
pause