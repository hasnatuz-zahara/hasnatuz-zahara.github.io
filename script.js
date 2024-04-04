document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");

    // Add to cart function
    function addToCart(productName, productPrice) {
        const li = document.createElement("li");
        li.innerHTML = `${productName} - ${productPrice} <button class="remove-from-cart">Remove</button>`;
        cartItems.appendChild(li);

        // Remove from cart event listener
        li.querySelector(".remove-from-cart").addEventListener("click", function () {
            cartItems.removeChild(li);
        });
    }

    // Add to cart button click event listeners
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productItem = button.closest(".product-item");
            const productName = productItem.querySelector(".product-name").textContent;
            const productPrice = productItem.querySelector(".product-price").textContent;
            addToCart(productName, productPrice);
        });
    });
});

