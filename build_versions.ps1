$ErrorActionPreference = "Stop"

$constantsFile = "src\constants\index.ts"
$outputDir = "release_builds"
$androidDir = "android"
$apkPath = "android\app\build\outputs\apk\release\app-release.apk"

# Ensure output directory exists
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
}

# --- AUTO-DETECT JAVA_HOME ---
$possibleJavaPaths = @(
    "C:\Program Files\Android\Android Studio\jbr",
    "C:\Program Files\Android\Android Studio\jre",
    "C:\Program Files\Android\Android Studio\bin\jbr"
)

# Force check for Android Studio Java
Write-Host "BUSCANDO JAVA EN ANDROID STUDIO..." -ForegroundColor Yellow
$javaFound = $false
foreach ($path in $possibleJavaPaths) {
    if (Test-Path $path) {
        $env:JAVA_HOME = $path
        Write-Host "USANDO JAVA: $path" -ForegroundColor Green
        $javaFound = $true
        break
    }
}

if (-not $javaFound) {
    if ($env:JAVA_HOME) {
         Write-Host "USANDO JAVA DEL SISTEMA: $env:JAVA_HOME" -ForegroundColor Yellow
    } else {
         Write-Error "NO SE ENCONTRO JAVA (JBR/JRE)."
         exit 1
    }
}

if (-not $env:JAVA_HOME) {
    Write-Error "NO SE ENCONTRO JAVA AUTOMATICAMENTE."
    exit 1
}
# -----------------------------

Write-Host "INICIANDO CONSTRUCCION..." -ForegroundColor Green

# Function to set trial mode
function Set-TrialMode ($isTrial) {
    $content = Get-Content $constantsFile -Raw
    # Replace true/false with the target value
    if ($isTrial -eq "true") {
        $content = $content -replace "export const IS_TRIAL_VERSION = false;", "export const IS_TRIAL_VERSION = true;"
    } else {
        $content = $content -replace "export const IS_TRIAL_VERSION = true;", "export const IS_TRIAL_VERSION = false;"
    }
    Set-Content -Path $constantsFile -Value $content -NoNewline
}

# ==========================================
# 1. Build FULL Version
# ==========================================
Write-Host "--------------------"
Write-Host "CONSTRUYENDO FULL..."
Write-Host "--------------------"

Set-TrialMode "false"

Push-Location $androidDir
cmd /c "gradlew.bat clean assembleRelease"
if ($LASTEXITCODE -ne 0) {
    Write-Error "ERROR EN BUILD FULL"
    Pop-Location
    exit 1
}
Pop-Location

if (Test-Path $apkPath) {
    Copy-Item $apkPath -Destination "$outputDir\ControlDriver_FULL.apk" -Force
    Write-Host "FULL OK: $outputDir\ControlDriver_FULL.apk" -ForegroundColor Cyan
} else {
    Write-Error "APK NO ENCONTRADO"
    exit 1
}

# ==========================================
# 2. Build TRIAL Version
# ==========================================
Write-Host "--------------------"
Write-Host "CONSTRUYENDO PRUEBA..."
Write-Host "--------------------"

Set-TrialMode "true"

Push-Location $androidDir
cmd /c "gradlew.bat assembleRelease"
if ($LASTEXITCODE -ne 0) {
    Write-Error "ERROR EN BUILD PRUEBA"
    Set-TrialMode "false"
    Pop-Location
    exit 1
}
Pop-Location

if (Test-Path $apkPath) {
    Copy-Item $apkPath -Destination "$outputDir\DriverControlPrueba.apk" -Force
    Write-Host "PRUEBA OK: $outputDir\DriverControlPrueba.apk" -ForegroundColor Cyan
} else {
    Write-Error "APK NO ENCONTRADO"
    exit 1
}

# ==========================================
# 3. Cleanup
# ==========================================
Set-TrialMode "false"

Write-Host "--------------------"
Write-Host "PROCESO TERMINADO!"
Write-Host "ARCHIVOS EN $outputDir"
Get-ChildItem $outputDir | Select-Object Name, Length
