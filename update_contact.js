const fs = require('fs');

const files = ['index.html', 'about.html', 'projects.html', 'solutions.html', 'contact.html', 'unified_footer.html'];

const regex = /<div class="footer-col contact-col">[\s\S]*?<\/div>\s*<\/div>/g;

const newContactCol = `<div class="footer-col contact-col">
                    <h4>CONTACT</h4>
                    <div class="footer-contact">
                        <p style="align-items: flex-start"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 4px; flex-shrink: 0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> <span>2nd Floor, Maruti Complex,<br>Abu Road, Rajasthan 307026, India</span></p>
                        <p style="align-items: flex-start"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 4px; flex-shrink: 0"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg> <span>+91 96766-59153<br>+91 90570-71463</span></p>
                        <p style="align-items: flex-start"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 4px; flex-shrink: 0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> <span>info@redescreation.in<br>redescreation@gmail.com</span></p>
                        <p style="align-items: flex-start"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top: 4px; flex-shrink: 0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span><b>Business Hours</b><br>Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 10:00 AM - 2:00 PM<br>Sun: Closed</span></p>
                    </div>
                </div>`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(regex, newContactCol);
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    } catch (e) {
        console.error('Error updating ' + file + ': ' + e);
    }
});
