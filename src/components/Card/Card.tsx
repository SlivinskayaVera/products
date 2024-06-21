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

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

export function Card({ product }: { product: Product }) {
  return (
    <CardWrapper>
      <ButtonsWrapper>
        <ButtonLike src="icon/like.svg" />
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
