import { El } from "@/utils";

export function Comment({ comment }) {
  return El({
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
  });
}
