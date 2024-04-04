import { getProductById } from "@/api/products";
import { Button } from "@/components";
import { El } from "@/utils";

export function Product(data) {
  getProductById(data.id).then((product) => {
    const child = createProductPage(product);
    Element.innerText = "";
    Element.append(child);
  });
  const Element = El({ element: "div", innerText: " در انتظار پاسخ سرور " });
  return Element;
}

function createProductPage(product) {
  return El({
    element: "div",
    className: "flex gap-5",
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
      El({
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
          Button({ text: "افزودن به سبد خرید" }),
        ],
      }),
    ],
  });
}
