import { El } from "@/utils/createElement";
import { Logo, SearchInput } from "@/components";
export function Header() {
  return El({
    element: "div",
    className: "p-1 container mx-auto flex justify-between items-center",
    children: [
      El({
        element: "div",
        className: "flex gap-1",
        children: [Logo(), SearchInput()],
      }),
      El({
        element: "div",
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
