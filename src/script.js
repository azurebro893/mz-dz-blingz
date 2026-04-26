/**
 * Mz D'z Dazzlin Blingz N Thingz 
 * Final App Logic & PWA Integration
 */

// 1. Open the Size/Style Selection Modal
function openOrder(productName) {
    const modal = document.getElementById('order-modal');
    const title = document.getElementById('selected-item-title');
    
    // Set the product name in the popup
    title.innerText = productName;
    
    // Show the modal
    modal.style.display = "block";
    
    // Smooth fade-in for mobile feel
    modal.style.animation = "fadeIn 0.3s";
}

// 2. Close the Modal
function closeModal() {
    const modal = document.getElementById('order-modal');
    modal.style.display = "none";
}

// 3. Close the Modal if user clicks anywhere outside of the box
window.onclick = function(event) {
    const modal = document.getElementById('order-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 4. Handle the Checkout Redirect
function triggerCheckout() {
    const item = document.getElementById('selected-item-title').innerText;
    const size = document.getElementById('size').value;
    const style = document.getElementById('gender').value;
    
    // User Confirmation
    alert(`Success! You've selected: \n\nItem: ${item} \nStyle: ${style} \nSize: ${size} \n\nRedirecting to secure payment...`);
    
    /**
     * REDIRECT TO PAYMENT
     * Update the 'yourname' below to your actual PayPal/CashApp link
     */
    const paymentLink = "https://www.paypal.com/paypalme/yourname"; 
    
    window.location.href = paymentLink;
}

// 5. PWA SERVICE WORKER REGISTRATION (The "App Wrapper")
// This is what makes your site installable and fast on mobile
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => {
                console.log('Mz Dz App Wrapper Active!', reg.scope);
            })
            .catch(err => {
                console.log('App Wrapper Registration Failed:', err);
            });
    });
}
