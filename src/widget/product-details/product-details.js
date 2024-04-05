import { El } from "@/utils";
import { BuySectionCard } from "@/components";

export function ProductDetails({ product }) {
  return El({
    element: "div",
    className: "flex gap-5 justify-between mb-5",
    children: [
      El({
        element: "img",
        src: product.image,
        width: 500,
      }),
      El({
        element: "div",
        children: [
          El({
            element: "h1",
            className: "text-2xl",
            innerText: product.details,
          }),
          El({
            element: "h3",
            innerText: product.name,
          }),
        ],
      }),
      BuySectionCard({ product }),
    ],
  });
}
