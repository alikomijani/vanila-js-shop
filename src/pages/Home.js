import Home from "@/templates/Home";
import { El } from "@/utils";
import { Layout } from "@/layout/layout";
export default function HomePage() {
  document.title = "home page";
  return El({
    element: "div",
    children: [Layout(Home)],
  });
}
