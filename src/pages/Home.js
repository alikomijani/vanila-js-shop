import Home from "@/templates/Home";
import { El } from "@/utils/createElement";
import { Layout } from "@/layout/layout";
export default function HomePage() {
  return El({
    element: "div",
    children: [Layout(Home)],
  });
}
