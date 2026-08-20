const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'solutions.html', 'projects.html', 'contact.html'];
const newNavPath = path.join(__dirname, 'unified_navbar.html');
const newNavContent = fs.readFileSync(newNavPath, 'utf8');

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match from <body...> down to just before <header
    // We want to replace everything in between with the new nav content
    const regex = /(<body[^>]*>)([\s\S]*?)(<header\s)/i;
    
    content = content.replace(regex, `$1\n    ${newNavContent}\n    $3`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});
