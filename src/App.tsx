import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./api";
import { Card } from "./components/Card/Card";

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

function App() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(res => setProductList(res));
  }, []);

  return (
    <>
    <button>Показать только избранное</button>
      <div className="cards">
        {productList.map(product => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default App;
