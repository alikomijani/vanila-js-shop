import Navigo from "navigo";
import { changePage } from "@/utils";
import HomePage from "@/pages/Home";
import ProductPage from "@/pages/Product";

const router = new Navigo("/");

export const Router = () => {
  router
    .on("/", () => {
      changePage(HomePage);
    })
    .on("/product/:id", ({ data }) => {
      changePage(ProductPage, data);
    });
  return router;
};
