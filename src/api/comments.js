import { baseUrl } from "./config";

export async function getCommentsByProductId(productId) {
  const response = await fetch(
    `${baseUrl}/comments?_expand=user&productId=${productId}`
  );
  const comments = await response.json();
  return comments;
}

export async function createComment(data) {
  const response = await fetch(
    `${baseUrl}/products/${data.productId}/comments`,
    {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const comment = await response.json();
  return comment;
}
export async function getCommentById(commentId) {
  const response = await fetch(`${baseUrl}/comments/${commentId}?_expand=user`);
  const comment = await response.json();
  return comment;
}
