import { baseUrl } from "./config";

export async function getCommentsByProductId(productId) {
  const response = await fetch(
    `${baseUrl}/comments?_expand=user&productId=${productId}`
  );
  const comments = await response.json();
  return comments;
}
