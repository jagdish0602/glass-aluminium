$files = @("index.html", "about.html", "solutions.html", "projects.html", "contact.html")
$newFooter = Get-Content unified_footer.html -Raw -Encoding UTF8

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    $content = $content -replace '(?is)<footer class="unified-footer">.*</body>\s*</html>', $newFooter
    Set-Content -Path $file -Value $content -NoNewline -Encoding UTF8
}
