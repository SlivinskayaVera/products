import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getProducts } from "../../api";
import { ButtonFilter, CardsWrapper } from "./MainPage.styled";
import { Loading } from "../../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setFavoriteMode,
  setProductsList,
} from "../../store/features/productSlice";

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  isLiked: boolean;
};

function Main() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const products = useAppSelector(store => store.products.products);
  const favoriteMode = useAppSelector(store => store.products.favoriteMode);

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
          <ButtonFilter
            onClick={() => {
              dispatch(setFavoriteMode());
            }}
          >
            {favoriteMode ? "Показать всё" : "Показать избранное"}
          </ButtonFilter>
          <CardsWrapper id="card-content">
            {products.map(product => {
              if (favoriteMode && product.isLiked)
                return <Card key={product.id} product={product} />;

              if (!favoriteMode)
                return <Card key={product.id} product={product} />;
            })}
          </CardsWrapper>
        </>
      )}
    </>
  );
}

export default Main;
