import { PRODUCT_KEY } from "./cart-management";
import storage from "./storage";
function Observer() {
  const observers = [];
  function subscribe(func) {
    observers.push(func);
  }
  function unsubscribe(func) {
    const index = observers.findIndex((item) => func === item);
    if (index !== -1) {
      observers.splice(index, 1);
    }
  }
  function notify() {
    observers.forEach((func) => func(storage.get(PRODUCT_KEY)));
  }
  return {
    subscribe,
    unsubscribe,
    notify,
  };
}
const observer = Observer();
export default observer;
