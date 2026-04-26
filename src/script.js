/**
 * Mz D'z Dazzlin Blingz N Thingz 
 * Main App Logic
 */

// 1. Open the Size/Style Selection Modal
function openOrder(productName) {
    const modal = document.getElementById('order-modal');
    const title = document.getElementById('selected-item-title');
    
    // Set the product name in the popup
    title.innerText = productName;
    
    // Show the modal
    modal.style.display = "block";
    
    // Add a small animation effect for mobile feel
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
    
    // 1. Show a confirmation to the user
    alert(`Success! You've selected: \n\nItem: ${item} \nStyle: ${style} \nSize: ${size} \n\nRedirecting to secure payment...`);
    
    /**
     * 2. REDIRECT TO PAYMENT
     * Replace 'yourname' with your actual PayPal or CashApp handle.
     * Example for PayPal: https://www.paypal.com/paypalme/YourBusinessName
     * Example for CashApp: https://cash.app/$YourCashtag
     */
    const paymentLink = "https://www.paypal.com/paypalme/yourname"; 
    
    window.location.href = paymentLink;
}

// 5. Mobile Orientation Check (Optional)
// Ensures the app looks good if the user rotates their phone
window.addEventListener("orientationchange", function() {
    console.log("Orientation changed, adjusting layout...");
});
