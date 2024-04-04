import { Product } from "@/templates/Product";
import { El } from "@/utils";
import { Layout } from "@/layout/layout";
export default function ProductPage() {
  document.title = "Product page";
  return El({
    element: "div",
    children: [Layout(Product)],
  });
}
