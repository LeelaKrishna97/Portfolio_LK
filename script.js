// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Side Navigation
const openContactBtn = document.getElementById('open-contact');
const closeSidenavBtn = document.getElementById('close-sidenav');
const sidenav = document.getElementById('contact-sidenav');

// Open the side navigation
openContactBtn.addEventListener('click', () => {
    sidenav.classList.add('open');
});

// Close the side navigation
closeSidenavBtn.addEventListener('click', () => {
    sidenav.classList.remove('open');
});

// Optionally close the side nav when clicking outside
document.addEventListener('click', (event) => {
    if (!sidenav.contains(event.target) && event.target !== openContactBtn) {
        sidenav.classList.remove('open');
    }
});

//popup script
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};
