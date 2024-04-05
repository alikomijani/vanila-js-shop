import { El, decreaseProductQuantity, increaseProductQuantity } from "@/utils";

export function CartItem({ item }) {
  const id = "cart-item-" + item.id;
  return El({
    element: "div",
    id: id,
    className: "flex px-2 py-5",
    children: [
      El({ element: "img", src: item.image, width: "150" }),
      El({
        element: "div",
        className: "flex flex-col justify-between",
        children: [
          El({
            element: "p",
            innerText: item.details,
          }),
          El({
            element: "div",
            className: "flex justify-between",
            children: [
              El({
                element: "div",
                className: "flex text-xl items-center",
                children: [
                  El({
                    element: "div",
                    className: "icon-[ic--outline-add] p-3 cursor-pointer",
                    eventListener: [
                      {
                        event: "click",
                        callback: (event) => {
                          const count = increaseProductQuantity(item);
                          const el = event.target.nextSibling;
                          el.innerText = count;
                        },
                      },
                    ],
                  }),
                  El({ element: "span", innerText: item.quantity }),
                  El({
                    element: "span",
                    className: "icon-[ic--outline-remove] p-3 cursor-pointer",
                    eventListener: [
                      {
                        event: "click",
                        callback: (event) => {
                          const count = decreaseProductQuantity(item);
                          const el = event.target.previousSibling;
                          el.innerText = count;
                          if (count === 0) {
                            const item = document.querySelector(`#${id}`);
                            item.remove();
                          }
                        },
                      },
                    ],
                  }),
                ],
              }),
              El({
                element: "p",
                innerText: `${(item.quantity * item.price).toLocaleString(
                  "fa"
                )} تومان`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
