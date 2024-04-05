import { El } from "@/utils";

export function ProductComments({ comments }) {
  return El({
    element: "ul",
    children: comments.map((comment) =>
      El({
        element: "li",
        className: "p-4 border-b",
        children: [
          El({
            element: "div",
            innerText: `${comment.user.name} ${comment.user.lastName}`,
          }),
          El({
            element: "div",
            innerText: comment.text,
          }),
        ],
      })
    ),
  });
}
