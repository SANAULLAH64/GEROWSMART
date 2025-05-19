document.addEventListener('DOMContentLoaded', function () {
    // ========== Slideshow Functionality ==========
    const slideshow = document.querySelector(".agri-slideshow");
    const slides = document.querySelectorAll(".agri-slide");
    const dots = document.querySelectorAll(".agri-dot");
  
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000);
  
    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));
  
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        resetInterval();
      });
    });
  
    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  
    // Pause on hover for desktop
    if (window.innerWidth > 768) {
      slideshow.addEventListener("mouseenter", () => clearInterval(slideInterval));
      slideshow.addEventListener("mouseleave", resetInterval);
    }
  
    // Touch support for swipe
    let touchStartX = 0;
  
    slideshow.addEventListener("touchstart", (e) => {
      if (!e.target.classList.contains("agri-btn")) {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(slideInterval);
      }
    }, { passive: true });
  
    slideshow.addEventListener("touchend", (e) => {
      if (!e.target.classList.contains("agri-btn")) {
        let touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) nextSlide();
        else if (touchEndX > touchStartX + 50) showSlide(currentSlide - 1);
        resetInterval();
      }
    });
  
    showSlide(0);
    // ========== Mobile Navigation Toggle ==========
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
      });
  
      // Close menu when clicking on nav items
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menuToggle.classList.remove('active');
          document.body.classList.remove('no-scroll');
        });
      });
    }
  
    // ========== Responsive Card Effects ==========
    const cards = document.querySelectorAll('.agri-card');
    
    cards.forEach((card) => {
      // Mobile-friendly hover effects
      if (window.innerWidth > 768) {
        card.addEventListener('mouseenter', () => {
          card.classList.add('hovered');
        });
  
        card.addEventListener('mouseleave', () => {
          card.classList.remove('hovered');
        });
      } else {
        // Touch effects for mobile
        card.addEventListener('touchstart', () => {
          cards.forEach(c => c.classList.remove('hovered'));
          card.classList.add('hovered');
        }, {passive: true});
      }
    });
  
    // ========== Responsive Search Bar ==========
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.input');
    
    if (searchContainer && window.innerWidth <= 768) {
      searchContainer.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
          searchInput.focus();
        }
      });
    }
  
    // ========== Responsive Image Sections ==========
    function checkImageSections() {
      const imageSections = document.querySelectorAll('.image-content-section');
      
      imageSections.forEach(section => {
        if (window.innerWidth <= 768) {
          // Stack vertically on mobile
          section.classList.add('stacked');
        } else {
          section.classList.remove('stacked');
        }
      });
    }
  
    // ========== Dynamic Footer Year ==========
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
      const year = new Date().getFullYear();
      copyrightElement.textContent = copyrightElement.textContent.replace('2023', year);
    }
  
    // ========== Window Resize Handler ==========
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        checkImageSections();
        
        // Reinitialize slideshow if needed
        if (slideshow) {
          clearInterval(interval);
          startSlideShow();
        }
      }, 250);
    });
  
    // Initialize on load
    checkImageSections();
  });
  
  // ========== Intersection Observer for Animations ==========
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.image-content-section, .cards-section, .social-banner').forEach(section => {
    observer.observe(section);
  });

