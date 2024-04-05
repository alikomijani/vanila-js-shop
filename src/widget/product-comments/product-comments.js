import { El } from "@/utils";
import { Comment } from "@/components";

export function ProductComments({ comments }) {
  return El({
    element: "ul",
    children: comments.map((comment) => Comment({ comment })),
  });
}
