// Load the summary from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const summaryItems = document.getElementById('summary-items');
const summaryTotal = document.getElementById('summary-total');

let total = 0;
cart.forEach(item => {
    total += item.price;
    summaryItems.innerHTML += `<p>${item.name} - UGX ${item.price.toLocaleString()}</p>`;
});
summaryTotal.innerText = `Total: UGX ${total.toLocaleString()}`;

// Handle form submission
document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cust-name').value;
    
    alert(`Success! Thank you ${name}, your order has been received.`);
    
    // Clear cart and go home
    localStorage.removeItem("cart");
    window.location.href = "home.html";
});