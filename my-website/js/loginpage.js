document.addEventListener('DOMContentLoaded', function() {
  // ========== Form Validation ==========
  const loginForm = document.querySelector('form');
  const emailInput = loginForm.querySelector('input[type="text"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  
  // Add input validation styling
  function showError(input, message) {
      const formControl = input.parentElement;
      formControl.classList.add('error');
      const errorMsg = formControl.querySelector('.error-message') || document.createElement('small');
      errorMsg.className = 'error-message';
      errorMsg.style.color = '#ff3333';
      errorMsg.textContent = message;
      if (!formControl.querySelector('.error-message')) {
          formControl.appendChild(errorMsg);
      }
      input.focus();
  }
  
  function clearError(input) {
      const formControl = input.parentElement;
      formControl.classList.remove('error');
      const errorMsg = formControl.querySelector('.error-message');
      if (errorMsg) {
          errorMsg.remove();
      }
  }
  
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
  
  function validatePhone(phone) {
      const re = /^[0-9]{10,15}$/;
      return re.test(String(phone));
  }
  
  loginForm.addEventListener('submit', function(event) {
      let isValid = true;
      
      // Clear previous errors
      clearError(emailInput);
      clearError(passwordInput);
      
      // Email/Phone validation
      if (!emailInput.value.trim()) {
          showError(emailInput, 'Email or phone is required');
          isValid = false;
      } else if (!validateEmail(emailInput.value.trim()) && !validatePhone(emailInput.value.trim())) {
          showError(emailInput, 'Please enter a valid email or phone number');
          isValid = false;
      }
      
      // Password validation
      if (!passwordInput.value.trim()) {
          showError(passwordInput, 'Password is required');
          isValid = false;
      } else if (passwordInput.value.trim().length < 6) {
          showError(passwordInput, 'Password must be at least 6 characters');
          isValid = false;
      }
      
      if (!isValid) {
          event.preventDefault();
      } else {
          // If valid, you can submit the form or handle login
          // Remove the alert in production and let the form submit
          console.log('Form is valid, submitting...');
          // loginForm.submit(); // Uncomment to allow form submission
      }
      const signupBtn = document.querySelector('.signup-btn');
      if (signupBtn) {
        signupBtn.addEventListener('click', function() {
          window.location.href = 'register.html'; // Change to your registration page URL
        });
      }
  });
  
  // Real-time validation
  emailInput.addEventListener('input', function() {
      if (emailInput.value.trim()) {
          clearError(emailInput);
      }
  });
  
  passwordInput.addEventListener('input', function() {
      if (passwordInput.value.trim()) {
          clearError(passwordInput);
      }
  });
  
  // ========== Responsive Behavior ==========
  function adjustLayout() {
      if (window.innerWidth <= 768) {
          // Mobile layout
          document.querySelector('.container').style.flexDirection = 'column';
          document.querySelector('.left-side').style.width = '100%';
          document.querySelector('.right-side').style.width = '100%';
          document.querySelector('.right-side').style.padding = '20px';
          document.querySelector('.login-box').style.maxWidth = '100%';
      } else {
          // Desktop layout
          document.querySelector('.container').style.flexDirection = 'row';
          document.querySelector('.left-side').style.width = '65%';
          document.querySelector('.right-side').style.width = '35%';
          document.querySelector('.right-side').style.padding = '0';
          document.querySelector('.login-box').style.maxWidth = '400px';
      }
  }
  
  // Debounce resize events for better performance
  let resizeTimer;
  window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
          adjustLayout();
      }, 250);
  });
  
  // Initialize on load
  adjustLayout();
});