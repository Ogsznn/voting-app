// Basic script to handle form submission (to be expanded based on functionality)
// Note: The original code had no JavaScript, so this is a placeholder for future use

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.registration-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! (This is a placeholder - implement backend logic)');
            // Add your form submission logic here (e.g., API call to Privy or Solana)
        });
    }

    // Language switcher (placeholder - enhance with actual language switching logic)
    const languageSelect = document.querySelector('.language-switcher select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            console.log('Language changed to:', e.target.value);
            // Implement language switching (e.g., update text content dynamically)
        });
    }
});
// Your existing code (if any)
console.log('Script loaded');

// Debug Privy SDK
console.log('Privy available:', typeof Privy); // Should log "function"

const privy = new Privy({
  appId: 'cmdksnrig000ll40jcsx4kx6r', // Replace with your actual App ID
});

async function connectWallet(event) {
  event.preventDefault(); // Prevent page reload
  try {
    await privy.login(); // Should open login modal
    document.getElementById('connect-wallet').textContent = 'Connected';
    console.log('Wallet connected!');
  } catch (error) {
    console.error('Connection failed:', error);
    alert('Failed to connect wallet.');
  }
}

// Attach event listener
document.getElementById('connect-wallet').addEventListener('click', connectWallet);