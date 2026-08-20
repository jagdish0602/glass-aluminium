$files = @("index.html", "about.html", "solutions.html", "projects.html", "contact.html")
$newNavbar = Get-Content unified_navbar.html -Raw -Encoding UTF8

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Remove old navbar
    $content = $content -replace '(?is)<nav class="navbar[^>]*>.*?</nav>\s*', ''
    # Remove old mobile menu
    $content = $content -replace '(?is)<div class="mobile-menu[^>]*>.*?</div>\s*', ''
    
    # Insert new navbar after opening body tag
    $content = $content -replace '(?i)(<body[^>]*>\s*)', "`$1$newNavbar`n"
    
    Set-Content -Path $file -Value $content -NoNewline -Encoding UTF8
}
