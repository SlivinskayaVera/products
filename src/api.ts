import { Product } from "./pages/MainPage/MainPage";

export async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");

  const responseData: Product[] = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}
