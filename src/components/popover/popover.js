import { El } from "@/utils";

export function Popover({ parent, child }) {
  return El({
    element: "div",
    className: "relative group",
    children: [
      parent,
      El({
        element: "div",
        className: "invisible group-hover:visible absolute bottom-0",
        children: [child],
      }),
    ],
  });
}
