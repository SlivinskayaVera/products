import { Product } from "./App";


export async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");

    // if (response.status !== "ок") {

    // }

    const responseData: Product[] = await response.json();

    console.log(responseData);

    return responseData;
}