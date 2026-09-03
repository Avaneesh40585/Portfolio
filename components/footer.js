function renderFooter() {
    const currentYear = new Date().getFullYear();

    const footerHTML = `
        <div class="wrap">
            <div class="colophon" id="colophon" role="button" tabindex="0" title="Click to re-align">
                <span class="al" id="alText">Avaneesh40585 · ${currentYear} </span>
            </div>
        </div>
    `;

    document.getElementById('footer').innerHTML = footerHTML;
    document.getElementById('footer').classList.add('footer');
}

renderFooter();
