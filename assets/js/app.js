// animation on scroll scripts
AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    mirror: true
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
// scroll to top scripts
const btn = document.getElementById('scrollTopBtn');
const circle = document.querySelector('.progress-ring-circle');
const circumference = 2 * Math.PI * 30;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollTop / scrollHeight;
    const offset = circumference - progress * circumference;
    circle.style.strokeDashoffset = offset;
}

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }

    updateProgress();
});

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

updateProgress();
