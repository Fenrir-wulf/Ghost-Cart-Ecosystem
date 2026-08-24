// Detects checkout buttons and applies the 24-hour cooling-off lock
function interceptCheckout() {
    const checkoutButtons = document.querySelectorAll('button, a');
    checkoutButtons.forEach(btn => {
        const text = btn.innerText.toLowerCase();
        if (text.includes('checkout') || text.includes('buy now')) {
            btn.disabled = true;
            btn.classList.add('ghost-cart-locked');
            btn.innerText = "Locked: 24h Cooling-Off Period";
            
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Ghost Cart: This action is temporarily locked to prevent impulse buying.');
            });
        }
    });
}

window.addEventListener('load', interceptCheckout);