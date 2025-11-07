const contactData = {
    title: 'Get In Touch',
    subtitle: 'Feel free to reach out for collaborations or just a friendly hello!',
    methods: [
        {
            icon: 'fas fa-envelope',
            title: 'Email',
            text: 'avaneesh40585@gmail.com',
            link: 'mailto:avaneesh40585@gmail.com'
        },
        {
            icon: 'fas fa-phone',
            title: 'Phone',
            text: '+91-7013945716',
            link: 'tel:+917013945716'
        },
        {
            icon: 'fab fa-linkedin',
            title: 'LinkedIn',
            text: 'Connect with me',
            link: 'https://www.linkedin.com/in/avaneesh-muskula/'
        },
        {
            icon: 'fab fa-github',
            title: 'GitHub',
            text: 'View my work',
            link: 'https://github.com/Avaneesh40585'
        }
    ]
};

function renderContactMethods() {
    return contactData.methods.map(contact => `
        <a href="${contact.link}" target="_blank" rel="noopener noreferrer" class="contact-card">
            <i class="${contact.icon}"></i>
            <h3>${contact.title}</h3>
            <p>${contact.text}</p>
        </a>
    `).join('');
}

function renderContact() {
    const contactHTML = `
        <div class="container">
            <h2 class="section-title">${contactData.title}</h2>
            <div class="contact-content">
                <p class="contact-subtitle">${contactData.subtitle}</p>
                <div class="contact-methods">
                    ${renderContactMethods()}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('contact').innerHTML = contactHTML;
    document.getElementById('contact').classList.add('contact');
}

renderContact();

