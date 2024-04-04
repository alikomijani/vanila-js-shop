import { El } from "@/utils";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export function Layout(main) {
  return El({
    element: "div",
    children: [
      Header(),
      El({
        element: "main",
        className: "container mx-auto",
        children: [main],
      }),
      Footer(),
    ],
  });
}
