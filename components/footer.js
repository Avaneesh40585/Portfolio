function renderFooter() {
    const currentYear = new Date().getFullYear();
    
    const footerHTML = `
        <div class="container">
            <p>&copy; ${currentYear} Avaneesh. All rights reserved.</p>
            <p>Built with <span class="heart">❤</span> using HTML, CSS & JavaScript</p>
        </div>
    `;
    
    document.getElementById('footer').innerHTML = footerHTML;
    document.getElementById('footer').classList.add('footer');
}

renderFooter();

