import { El } from "@/utils";
import logo from "@/assets/image/logo.svg";
import { Link } from "../link/link";
export function Logo() {
  return Link({
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
