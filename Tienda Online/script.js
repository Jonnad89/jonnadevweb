document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountSpan = document.getElementById('cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountSpan.textContent = cartCount;
            alert('Producto añadido al carrito.');
        });
    });
});