let cart = [];
let totalAmount = 0;

function addToCart(id, name, price) {
  const cartItem = { id, name, price };
  cart.push(cartItem);
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalAmountDisplay = document.getElementById('total-amount');
  
  cartItemsContainer.innerHTML = ''; // Clear cart items display
  totalAmount = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(itemDiv);
    totalAmount += item.price;
  });

  totalAmountDisplay.textContent = totalAmount.toFixed(2);
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Total: $${totalAmount.toFixed(2)}. Proceeding to checkout...`);
    cart = [];  // Clear the cart
    updateCart();  // Update the cart display to show empty cart
  }
});

