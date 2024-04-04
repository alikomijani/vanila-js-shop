import { El } from "@/utils";

export function ProductCard({ name, details, price, image, className }) {
  return El({
    element: "div",
    className,
    children: [
      El({
        element: "div",
        className:
          "flex flex-col gap-1 p-2 items-center cursor-pointer hover:shadow-lg",
        children: [
          El({
            element: "img",
            width: 300,
            src: image,
          }),
          El({
            element: "h3",
            innerText: details,
          }),
          El({
            element: "p",
            className: "text-left self-end",
            innerText: price,
          }),
        ],
      }),
    ],
  });
}
