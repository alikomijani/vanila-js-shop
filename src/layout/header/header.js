import { El, getCartItemCount } from "@/utils";
import { Logo, SearchInput, Link, Badge } from "@/components";
export function Header() {
  return El({
    element: "div",
    className: "p-1 py-5 container mx-auto flex justify-between items-center",
    children: [
      El({
        element: "div",
        className: "flex gap-1",
        children: [Logo(), SearchInput()],
      }),
      Link({
        href: "/cart",
        className: "block",
        children: [
          Badge({
            id: "cart-count-badge",
            text: getCartItemCount(),
            child: El({
              element: "span",
              className: "icon-[ic--outline-shopping-cart] text-4xl",
            }),
          }),
        ],
      }),
    ],
  });
}
