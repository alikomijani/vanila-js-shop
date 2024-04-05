import { getProductById } from "@/api/products";
import { ProductDetails, ProductComments } from "@/widget";
import { El } from "@/utils";
import { getCommentsByProductId } from "@/api/comments";

export function Product(data) {
  getProductById(data.id).then((product) => {
    element
      .querySelector("#product-details")
      .append(ProductDetails({ product }));
    getCommentsByProductId(data.id).then((comments) => {
      element
        .querySelector("#comments-details")
        .append(ProductComments({ comments }));
    });
  });
  const element = El({
    element: "div",
    children: [
      El({ element: "div", id: "product-details" }),
      El({ element: "div", id: "comments-details" }),
    ],
  });
  // Promise.all([getProductById(data.id), getCommentsByProductId(data.id)]).then(
  //   (values) => {
  //     element.append(
  //       ProductDetails({ product: values[0] }),
  //       ProductComments({ comments: values[1] })
  //     );
  //   }
  // );
  return element;
}
