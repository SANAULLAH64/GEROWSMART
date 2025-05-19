// Toggle sidebar on mobile
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', darkModeToggle.checked ? 'true' : 'false');
});

// Load dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }
});

// Chat functionality
const chatInput = document.querySelector('.chat-input input');
const chatMessages = document.querySelector('.chat-messages');
const chatButton = document.querySelector('.chat-input button');

chatButton.addEventListener('click', () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    // Add user message to chat
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user');
    userMessageElement.innerHTML = `<div class="message-content"><p>${userMessage}</p></div>`;
    chatMessages.appendChild(userMessageElement);

    // Simulate AI response
    const aiMessageElement = document.createElement('div');
    aiMessageElement.classList.add('message', 'system');
    aiMessageElement.innerHTML = `
      <div class="message-content">
        <p>Thank you for your question! Here's some advice:</p>
        <ul>
          <li>Ensure proper sunlight and watering for your plants.</li>
          <li>Check soil quality regularly.</li>
          <li>Feel free to ask more specific questions!</li>
        </ul>
      </div>`;
    chatMessages.appendChild(aiMessageElement);

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Clear input field
    chatInput.value = '';
}
});

// Handle "Enter" key for chat input
chatInput.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
    chatButton.click();
}
});

// Feature card hover effect
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach((card) => {
card.addEventListener('mouseenter', () => {
    card.classList.add('hover');
});

card.addEventListener('mouseleave', () => {
    card.classList.remove('hover');
});
});