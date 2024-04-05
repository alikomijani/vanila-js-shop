import { El } from "@/utils";

export function Badge({ text, child, ...rest }) {
  return El({
    element: "div",
    className: "relative",
    children: [
      child,
      El({
        element: "div",
        innerText: text,
        className:
          "absolute bottom-0 -right-2 px-2 bg-red-500 text-white text-sm rounded-lg",
        ...rest,
      }),
    ],
  });
}
