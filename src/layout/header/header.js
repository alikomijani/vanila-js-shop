import { El } from "@/utils/createElement";

export function Header() {
  return El({
    element: "div",
    className: "bg-red-600",
    children: [],
    innerText: "header",
  });
}
