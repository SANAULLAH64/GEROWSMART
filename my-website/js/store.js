document.addEventListener('DOMContentLoaded', () => {
    // ========== Filter Functionality ==========
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
  
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        // Remove active class from all buttons
        document.querySelector('.filter-btn.active').classList.remove('active');
        // Add active class to the clicked button
        this.classList.add('active');
  
        const filter = this.textContent.toLowerCase();
  
        // Filter products
        productCards.forEach((card) => {
          const category = card.querySelector('.product-category').textContent.toLowerCase();
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  
    // ========== Add to Cart Animation ==========
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        this.innerHTML = '<i class="fas fa-check"></i> Added';
        this.disabled = true;
  
        setTimeout(() => {
          this.innerHTML = '<i class="fas fa-cart-plus"></i> Add';
          this.disabled = false;
        }, 2000);
      });
    });
  
    // ========== Search Functionality ==========
    const searchInput = document.querySelector('.search-box input');
  
    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
  
      productCards.forEach((card) => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const description = card.querySelector('.product-desc').textContent.toLowerCase();
  
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    // ========== Responsive Navbar ==========
    const navLinks = document.querySelector('.nav-links');
    const navIcons = document.querySelector('.nav-icons');
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
        navIcons.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navIcons.style.display = 'flex';
      }
    });
  
    // Ensure proper display on page load
    if (window.innerWidth <= 768) {
      navLinks.style.display = 'none';
      navIcons.style.display = 'none';
    }
  });