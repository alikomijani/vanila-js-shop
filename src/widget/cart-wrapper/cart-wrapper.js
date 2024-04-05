import { El, getCartItems } from "@/utils";
import { Button, CartItem } from "@/components";
export function CartWrapper() {
  const cartItem = getCartItems();
  return El({
    element: "div",
    className: "block h-[500px] bg-white shadow-lg rounded-md w-[400px]",
    children: [
      El({
        element: "div",
        className: "h-[450px] overflow-y-scroll",
        children: cartItem.map((item) => CartItem({ item })),
      }),
      El({
        element: "div",
        className: " flex p-2 justify-between",
        children: [
          El({ element: "p", innerText: "35000" }),
          Button({ text: "ثبت سفارش", className: "w-[100px]" }),
        ],
      }),
    ],
  });
}
