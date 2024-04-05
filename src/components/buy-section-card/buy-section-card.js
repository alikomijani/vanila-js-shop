import { El, increaseProductQuantity } from "@/utils";
import { Button } from "../button/Button";

export function BuySectionCard({ product }) {
  return El({
    element: "div",
    className: "border rounded-md bg-gray-100 p-2 w-1/4",
    children: [
      El({
        element: "div",
        className: "flex justify-between my-2",
        children: [
          El({
            element: "p",
            innerText: "قیمت",
          }),
          El({
            element: "p",
            innerText: product.price,
          }),
        ],
      }),
      Button({
        text: "افزودن به سبد خرید",
        eventListener: [
          {
            event: "click",
            callback: () => {
              increaseProductQuantity(product);
            },
          },
        ],
      }),
    ],
  });
}
