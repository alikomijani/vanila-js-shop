export const PRODUCT_KEY = "cart_v1";
import storage from "./storage";
import observer from "./observer";
export function getCartItems() {
  try {
    const cartItems = storage.get(PRODUCT_KEY);
    if (!Array.isArray(cartItems)) {
      throw new Error(`bad data is stored in ${PRODUCT_KEY}`);
    }
    return cartItems;
  } catch {
    storage.set(PRODUCT_KEY, []);
    return [];
  }
}
export function increaseProductQuantity(product) {
  const cartItems = getCartItems();
  const index = cartItems.findIndex((items) => items.id === product.id);
  let result = 1;
  if (index === -1) {
    cartItems.push({ ...product, quantity: 1 });
  } else {
    cartItems[index].quantity++;
    result = cartItems[index].quantity;
  }
  storage.set(PRODUCT_KEY, cartItems);
  observer.notify(cartItems);
  getCartItemCount();
  return result;
}
export function decreaseProductQuantity(product) {
  const cartItems = getCartItems();
  const index = cartItems.findIndex((items) => items.id === product.id);
  if (!index === -1) {
    return;
  }
  let result = 0;
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity--;
    result = cartItems[index].quantity;
  } else {
    cartItems.splice(index, 1);
  }
  storage.set(PRODUCT_KEY, cartItems);
  observer.notify(cartItems);
  getCartItemCount();
  return result;
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
