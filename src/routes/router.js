import Navigo from "navigo";
import { changePage } from "@/utils";
import HomePage from "@/pages/Home";
import ProductPage from "@/pages/Product";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(HomePage);
  })
  .on("/products/:id", ({ data }) => {
    changePage(ProductPage, data);
  });
