import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getProducts } from "../../api";
import { ButtonFilter, CardsWrapper } from "./MainPage.styled";
import { Loading } from "../../components/Loading/Loading";

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

function Main() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(res => {
      setProductList(res), setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ButtonFilter onClick={() => console.log("object")}>Показать только избранное</ButtonFilter>
          <CardsWrapper>
            {productList.map(product => {
              return <Card key={product.id} product={product} />;
            })}
          </CardsWrapper>
        </>
      )}
    </>
  );
}

export default Main;
