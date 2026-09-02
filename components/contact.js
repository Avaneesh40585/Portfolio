const contactData = {
    kicker: 'Contact',
    number: '06',
    subtitle: 'Feel free to reach out for collaborations or just a friendly hello!',
    email: 'avaneesh40585@gmail.com',
    emailLink: 'https://mail.google.com/mail/?view=cm&fs=1&to=avaneesh40585@gmail.com',
    // The navbar already lists every section, so this block carries only
    // outbound links — and the email lives in exactly one place.
    methods: [
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/avaneesh-muskula/'
        },
        {
            title: 'GitHub',
            link: 'https://github.com/Avaneesh40585'
        }
    ]
};

function renderContactMethods() {
    return contactData.methods.map(method => `
        <a class="end-link" href="${method.link}" target="_blank" rel="noopener noreferrer">
            ${method.title} <span aria-hidden="true">↗</span>
        </a>
    `).join('');
}

function renderContact() {
    const contactHTML = `
        <div class="wrap">
            <h2 class="kicker"><i>${contactData.number}</i> — ${contactData.kicker}</h2>
            <p class="contact-subtitle">${contactData.subtitle}</p>
            <a class="contact-email" href="${contactData.emailLink}" target="_blank" rel="noopener noreferrer">${contactData.email}</a>
            <div class="end-links">
                ${renderContactMethods()}
            </div>
        </div>
    `;

    document.getElementById('contact').innerHTML = contactHTML;
    document.getElementById('contact').classList.add('contact');
}

renderContact();
