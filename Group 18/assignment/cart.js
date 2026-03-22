const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// 1. Get data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" width="50">
                <span>${item.name}</span>
                <span>UGX ${item.price.toLocaleString()}</span>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalPriceElement.innerText = `UGX ${total.toLocaleString()}`;
}

// 2. Remove item function
function removeItem(index) {
    cart.splice(index, 1); // Remove from array
    localStorage.setItem("cart", JSON.stringify(cart)); // Update storage
    displayCart(); // Refresh list
}

function goToCheckout() {
    window.location.href = "checkout.html"; // Send them to the form
}

displayCart();