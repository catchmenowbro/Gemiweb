document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const thankYouMessage = document.getElementById('thank-you-message');

    yesBtn.addEventListener('click', () => {
        // Hide the buttons and show the thank you message
        yesBtn.style.display = 'none';
        thankYouMessage.classList.remove('hidden');
    });
});
