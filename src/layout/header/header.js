import { El } from "@/utils/createElement";
import { Logo, SearchInput } from "@/components";
export function Header() {
  return El({
    element: "div",
    className: "flex",
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
            className: "icon-[ic--outline-shopping-cart]",
          }),
        ],
      }),
    ],
  });
}
