import Navigo from "navigo";
import { changePage } from "@/utils";
import HomePage from "@/pages/Home";
import ProductPage from "@/pages/Product";
import CartPage from "@/pages/Cart";
export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(HomePage);
  })
  .on("/products/:id", ({ data }) => {
    changePage(ProductPage, data);
  })
  .on("/cart", () => {
    changePage(CartPage);
  });
