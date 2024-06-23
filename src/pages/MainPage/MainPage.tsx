import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getProducts } from "../../api";
import { ButtonFilter, CardsWrapper } from "./MainPage.styled";
import { Loading } from "../../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setProductsList } from "../../store/features/productSlice";

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
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const products = useAppSelector(store => store.products.products);

  useEffect(() => {
    getProducts().then(res => {
      dispatch(setProductsList(res)), setLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ButtonFilter onClick={() => console.log("object")}>
            Показать избранное
          </ButtonFilter>
          <CardsWrapper>
            {products.map(product => {
              return <Card key={product.id} product={product} />;
            })}
          </CardsWrapper>
        </>
      )}
    </>
  );
}

export default Main;
