import { El } from "@/utils";
import logo from "@/assets/image/logo.svg";
export function Logo() {
  return El({
    element: "a",
    className: "block",
    href: "/",
    children: [
      El({
        element: "img",
        src: logo,
      }),
    ],
  });
}
