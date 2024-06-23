import { Product } from "../../pages/MainPage/MainPage";
import { setFavoriteProduct } from "../../store/features/productSlice";
import { useAppDispatch } from "../../store/hooks";
import {
  ButtonDelete,
  ButtonLike,
  ButtonsWrapper,
  CardBottom,
  CardImage,
  CardPrice,
  CardTitle,
  CardTop,
  CardWrapper,
} from "./Card.styled";

export function Card({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  return (
    <CardWrapper>
      <ButtonsWrapper>
        <ButtonLike
          onClick={() => dispatch(setFavoriteProduct({ id: product.id }))}
          src={product.isLiked ? "icon/like.svg" : "icon/dislike.svg"}
        />
        <ButtonDelete src="icon/cross.svg" />
      </ButtonsWrapper>
      <CardTop>
        <CardImage src={product.image} alt="product" />
      </CardTop>
      <CardBottom>
        <CardPrice>{product.price}</CardPrice>
        <CardTitle href="#">{product.title}</CardTitle>
      </CardBottom>
    </CardWrapper>
  );
}
