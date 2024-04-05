import { getProductById } from "@/api/products";
import { ProductDetails, ProductComments, CommentForm } from "@/widget";
import { El } from "@/utils";
import { getCommentsByProductId } from "@/api/comments";

export function Product(data) {
  const productId = data.id;
  getProductById(productId).then((product) => {
    element
      .querySelector("#product-details")
      .append(ProductDetails({ product }));
    getCommentsByProductId(productId).then((comments) => {
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
      El({
        element: "div",
        id: "comment-form",
        className: "md:w-1/2 m-6",
        children: [
          CommentForm({
            productId,
            querySelectorString: "#comments-details>ul",
          }),
        ],
      }),
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
