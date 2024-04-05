import { El } from "@/utils";
import { getProducts } from "@/api/products";
import { ProductCard } from "@/components";
export default function Home() {
  const Element = El({
    element: "div",
    className: "flex gap-5 my-2",
  });
  getProducts().then((products) => {
    products.forEach((product) => {
      const productCard = ProductCard({ product });
      Element.append(productCard);
    });
  });
  return Element;
}
