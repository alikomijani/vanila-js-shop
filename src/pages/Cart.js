import Cart from "@/templates/Cart";
import { El } from "@/utils";
import { Layout } from "@/layout/layout";
export default function CartPage() {
  return El({
    element: "div",
    children: [Layout(Cart())],
  });
}
