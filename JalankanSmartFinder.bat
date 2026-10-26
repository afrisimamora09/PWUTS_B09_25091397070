
@echo off
title SmartFinder Server
cd /d "%~dp0"

py app.py

if errorlevel 1 (
    echo.
    echo Server tidak dapat dijalankan.
    echo Pastikan Python sudah terpasang.
    pause
)
