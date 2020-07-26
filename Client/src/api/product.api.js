export async function getProducts(num) {
  return await (await fetch(`/products/all-products?page=${num}`)).json();
}
