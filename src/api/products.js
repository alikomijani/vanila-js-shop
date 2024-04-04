const baseUrl = "http://localhost:3000";

export async function getProducts() {
  const response = await fetch(`${baseUrl}/products`);
  const products = await response.json();
  return products;
}

export async function getProductById(id) {
  const response = await fetch(`${baseUrl}/products/${id}`);
  const product = await response.json();
  return product;
}
