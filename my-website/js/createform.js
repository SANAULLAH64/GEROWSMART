// Add random particle spray effect
document.querySelectorAll('.map-btn, .checkout-btn').forEach(button => {
  button.addEventListener('mouseenter', (e) => {
    // Create multiple particles
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('span');
      particle.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        pointer-events: none;
        --random-x: ${Math.random() * 2 - 1};
        --random-y: ${Math.random() * 2 - 1};
      `;
      particle.style.animation = `particleSpray 0.6s ease-out forwards`;
      button.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 600);
    }
  });
});


// Form validation
const form = document.querySelector('.form');
const inputFields = document.querySelectorAll('.input_field');

form.addEventListener('submit', (event) => {
  let isValid = true;

  inputFields.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (!isValid) {
    event.preventDefault();
    alert('Please fill out all required fields.');
  } else {
    alert('Account created successfully!');
  }
});

// Handle "Open Map" button
const mapButton = document.querySelector('.map-btn');

mapButton.addEventListener('click', () => {
  alert('Map functionality is not implemented yet.');
  // You can integrate a map API like Google Maps here.
});

// Add focus and blur effects to input fields
inputFields.forEach((input) => {
  input.addEventListener('focus', () => {
    input.classList.add('focused');
  });

  input.addEventListener('blur', () => {
    if (!input.value.trim()) {
      input.classList.remove('focused');
    }
  });
});