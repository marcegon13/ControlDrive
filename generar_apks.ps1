$ErrorActionPreference = "Stop"

Write-Host "🚀 INICIANDO GENERACIÓN DE APKs DOBLES..." -ForegroundColor Green

# Rutas
$projectRoot = Get-Location
$constantsFile = "$projectRoot\src\constants.ts"
$apkOutput = "$projectRoot\android\app\build\outputs\apk\release\app-release.apk"
$adminApk = "$projectRoot\ControlDriver_FULL_ADMIN.apk"
$publicApk = "$projectRoot\ControlDriver_PUBLICO_TRIAL.apk"

# Función reemplazo
function Set-ProMode ($enabled) {
    $content = Get-Content $constantsFile -Raw
    if ($enabled) {
        $content = $content -replace "isPro: false", "isPro: true"
        Write-Host "✅ Configurado MODO ADMIN (isPro: true)" -ForegroundColor Yellow
    } else {
        $content = $content -replace "isPro: true", "isPro: false"
        Write-Host "✅ Configurado MODO PUBLICO (isPro: false)" -ForegroundColor Yellow
    }
    Set-Content $constantsFile $content
}

# 1. Generar ADMIN
Write-Host "------------------------------------------------"
Write-Host "🔨 1/2 Generando Versión FULL ADMIN..." -ForegroundColor Cyan
Set-ProMode $true

Set-Location "$projectRoot\android"
./gradlew clean
./gradlew assembleRelease --no-daemon --max-workers=1

if (Test-Path $apkOutput) {
    Copy-Item $apkOutput $adminApk -Force
    Write-Host "🎉 APK ADMIN Generada: $adminApk" -ForegroundColor Green
} else {
    Write-Error "Fallo la compilación Admin"
}

# 2. Generar PUBLICO
Write-Host "------------------------------------------------"
Write-Host "🔨 2/2 Generando Versión PUBLICA (TRIAL)..." -ForegroundColor Cyan
Set-Location $projectRoot
Set-ProMode $false

Set-Location "$projectRoot\android"
# No hacemos clean total para ganar tiempo, o sí para seguridad? Mejor clean parcial.
# ./gradlew clean # Comentado para velocidad, assembleRelease debería detectar cambios si cambiamos constants.ts? 
# React Native a veces no refresca JS bundle sin clean. Haremos clean rapido.
./gradlew assembleRelease --no-daemon --max-workers=1

if (Test-Path $apkOutput) {
    Copy-Item $apkOutput $publicApk -Force
    Write-Host "🎉 APK PUBLICA Generada: $publicApk" -ForegroundColor Green
} else {
    Write-Error "Fallo la compilación Pública"
}

Set-Location $projectRoot
Write-Host "------------------------------------------------"
Write-Host "✅ PROCESO COMPLETADO EXITO." -ForegroundColor Green
Write-Host "Tus archivos están en:"
Write-Host "1. $adminApk"
Write-Host "2. $publicApk"
