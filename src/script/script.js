const menu = document.getElementById("menu");
const actoins = document.getElementById("actoins");
const t = document.getElementById("a");
const tt = document.getElementById("b");
const ttt = document.getElementById("c");
menu.addEventListener("click", () => {
    hundleMenu();
});

function hundleMenu(){
    menu.classList.toggle("is-active")
    actoins.classList.toggle("is-active")
    t.classList.toggle("is-active")
    tt.classList.toggle("is-active")
    ttt.classList.toggle("is-active")
}



// Fonction pour initialiser le slider de démos
function initDemoSlider() {
    const demoSlides = document.querySelectorAll('.demo-slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;
    // Fonction pour afficher un slide spécifique
    function showSlide(index) {
        // Gestion des limites
        if (index < 0) index = demoSlides.length - 1;
        if (index >= demoSlides.length) index = 0;
        
        // Mise à jour de l'index courant
        currentSlide = index;
        
        // Mise à jour des classes active
        demoSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });
        
        // Mise à jour de la position du slider
        const slidesContainer = document.querySelector('.demo-slides');
        const slideWidth = demoSlides[0].offsetWidth;
        slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    
    // Initialisation du premier slide
    showSlide(currentSlide);
    
    // Gestion des boutons de navigation
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
        
        nextButton.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }
    
    // Défilement automatique
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

initDemoSlider()

// Fonction pour initialiser le slider de témoignages
function initTestimonialSlider() {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentSlide = 0;
    
    // Fonction pour afficher un témoignage spécifique
    function showTestimonial(index) {
        // Gestion des limites
        if (index < 0) index = testimonialSlides.length - 1;
        if (index >= testimonialSlides.length) index = 0;
        
        // Mise à jour de l'index courant
        currentSlide = index;
        
        // Mise à jour des classes active
        testimonialSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });
    }
    
    // Initialisation du premier témoignage
    showTestimonial(currentSlide);
    
    // Gestion des boutons de navigation
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            showTestimonial(currentSlide - 1);
        });
        
        nextButton.addEventListener('click', () => {
            showTestimonial(currentSlide + 1);
        });
    }
    
    // Défilement automatique
    setInterval(() => {
        showTestimonial(currentSlide + 1);
    }, 7000);
}
initTestimonialSlider()

// Gestion du header sticky et du bouton retour en haut

    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Gestion du bouton retour en haut
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // Fonction pour initialiser le compteur à rebours
function initCountdown() {
    // Date cible (7 jours à partir de maintenant)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    
    // Éléments du compteur
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Fonction de mise à jour du compteur
    function updateCountdown() {
        const currentDate = new Date();
        const difference = targetDate - currentDate;
        
        // Calcul des jours, heures, minutes et secondes
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Mise à jour des éléments HTML
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        // Si le compteur est terminé
        if (difference < 0) {
            clearInterval(countdownInterval);
            if (daysElement) daysElement.textContent = '00';
            if (hoursElement) hoursElement.textContent = '00';
            if (minutesElement) minutesElement.textContent = '00';
            if (secondsElement) secondsElement.textContent = '00';
        }
    }
    
    // Mise à jour initiale
    updateCountdown();
    
    // Mise à jour toutes les secondes
    const countdownInterval = setInterval(updateCountdown, 1000);
}
initCountdown()