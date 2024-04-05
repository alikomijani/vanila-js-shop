const PRODUCT_KEY = "cart_v1";

export function getCartItems() {
  const rawCartItems = localStorage.getItem(PRODUCT_KEY);
  if (!rawCartItems) {
    localStorage.setItem(PRODUCT_KEY, JSON.stringify([]));
    return [];
  }
  try {
    const cartItems = JSON.parse(rawCartItems);
    if (!Array.isArray(cartItems)) {
      throw new Error(`bad data is stored in ${PRODUCT_KEY}`);
    }
    return cartItems;
  } catch {
    localStorage.setItem(PRODUCT_KEY, JSON.stringify([]));
    return [];
  }
}
export function increaseProductQuantity(product) {
  const cartItems = getCartItems();
  const index = cartItems.findIndex((items) => items.id === product.id);
  if (index === -1) {
    cartItems.push({ ...product, quantity: 1 });
  } else {
    cartItems[index].quantity++;
  }
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(cartItems));
  getCartItemCount();
}
export function decreaseProductQuantity(product) {
  const cartItems = getCartItems();
  const index = cartItems.findIndex((items) => items.id === product.id);
  if (!index === -1) {
    return;
  }
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity--;
  } else {
    cartItems.splice(index, 1);
  }
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(cartItems));
  getCartItemCount();
}

export function getCartItemCount() {
  const cartItems = getCartItems();
  const count = cartItems.reduce(
    (count, cartItem) => (count += cartItem.quantity),
    0
  );
  const el = document.getElementById("cart-count-badge");
  if (el) {
    el.innerText = count;
  }
  return count;
}
