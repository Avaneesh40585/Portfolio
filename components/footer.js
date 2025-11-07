function renderFooter() {
    const currentYear = new Date().getFullYear();
    
    const footerHTML = `
        <div class="container">
            <p>&copy; ${currentYear} My Portfolio. All rights reserved.</p>
            <p>Made by Avaneesh.</p>
        </div>
    `;
    
    document.getElementById('footer').innerHTML = footerHTML;
    document.getElementById('footer').classList.add('footer');
}

renderFooter();

