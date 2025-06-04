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