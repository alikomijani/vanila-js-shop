import { createComment, getCommentById } from "@/api/comments";
import { Button, Comment } from "@/components";
import { El } from "@/utils";

export function CommentForm({ productId, querySelectorString }) {
  return El({
    element: "form",
    children: [
      El({
        element: "label",
        className: "block",
        children: [
          El({
            element: "span",
            className: "text-gray-700",
            innerText: "متن نظر",
          }),
          El({
            element: "textarea",
            name: "text",
            rows: "5",
            className: "form-input mt-1 block w-full",
            placeholder: "نظر خود را در اینجا درج کنید",
          }),
        ],
      }),
      El({
        element: "input",
        name: "productId",
        value: productId,
        hidden: true,
      }),
      El({
        element: "div",
        className: "mt-2",
        children: [Button({ text: "ثبت نظر" })],
      }),
    ],
    eventListener: [
      {
        event: "submit",
        callback: async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData.entries());
          const { id } = await createComment({ ...data, userId: "1" });
          const newComment = await getCommentById(id);
          const parent = document.querySelector(querySelectorString);
          parent.appendChild(Comment({ comment: newComment }));
          event.target.reset();
        },
      },
    ],
  });
}
