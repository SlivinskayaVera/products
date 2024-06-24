import { Link } from "react-router-dom";
import { Product } from "../../pages/MainPage/MainPage";
import {
  setDeleteProduct,
  setDynamicProductPage,
  setFavoriteProduct,
} from "../../store/features/productSlice";
import { useAppDispatch } from "../../store/hooks";
import {
  ButtonDelete,
  ButtonLike,
  ButtonsWrapper,
  CardBottom,
  CardImage,
  CardTitle,
  CardTop,
  CardWrapper,
} from "./Card.styled";
import { ProductPrice } from "../../common/CommonComponents.styled";

export function Card({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  return (
    <Link
      to={`/products/${product.id}`}
      onClick={() => dispatch(setDynamicProductPage({ id: product.id }))}
    >
      <CardWrapper>
        <ButtonsWrapper>
          <ButtonLike
            onClick={e => {
              e.preventDefault();

              dispatch(setFavoriteProduct({ id: product.id }));
            }}
            src={product.isLiked ? "icon/like.svg" : "icon/dislike.svg"}
          />
          <ButtonDelete
            onClick={e => {
              e.preventDefault();
              dispatch(setDeleteProduct({ id: product.id }));
            }}
            src="icon/cross.svg"
          />
        </ButtonsWrapper>
        <CardTop>
          <CardImage src={product.image} alt="product" />
        </CardTop>
        <CardBottom>
          <ProductPrice>{product.price}</ProductPrice>
          <CardTitle>{product.title}</CardTitle>
        </CardBottom>
      </CardWrapper>
    </Link>
  );
}
