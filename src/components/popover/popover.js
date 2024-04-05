import { El } from "@/utils";

export function Popover({ parent, child }) {
  return El({
    element: "div",
    className: "relative group block",
    children: [
      parent,
      El({
        element: "div",
        className: "invisible group-hover:visible absolute top-[40px] left-0",
        children: [child],
      }),
    ],
  });
}
