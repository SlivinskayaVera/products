import { SVG } from "../SVGImage/SVGImage";
import { CardBottom, CardImage, CardPrice, CardTitle, CardTop, CardWrapper } from "./Card.styled";

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
      <SVG url="like" className="like" />
      <CardTop>
        <CardImage src={product.image} alt="product" />
      </CardTop>
      <CardBottom>
        <CardPrice>{product.price}</CardPrice>
        <CardTitle href="#">
          {product.title}
        </CardTitle>
      </CardBottom>
    </CardWrapper>
  );
}
