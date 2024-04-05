import { El } from "@/utils";
import { Logo, SearchInput, Link } from "@/components";
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
        children: [
          El({
            element: "span",
            className: "icon-[ic--outline-shopping-cart] text-4xl",
          }),
        ],
      }),
    ],
  });
}
