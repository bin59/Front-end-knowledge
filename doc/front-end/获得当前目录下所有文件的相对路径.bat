@echo off
setlocal enabledelayedexpansion
for /r %%i in (*.*) do (
set s=%%i
set s=!s:%~dp0=!
echo !s!>> filename.txt
)