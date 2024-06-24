import { useAppSelector } from "../../store/hooks";
import {
  ContentBottom,
  Image,
  ProductTitle,
  ContentTop,
  ContentWrapper,
  Description,
  MainWrapper,
  RatingWrapper,
} from "./ProductPage.styled";
import { useNavigate } from "react-router-dom";
import { Button, ProductPrice } from "../../common/CommonComponents.styled";
import { StarRating } from "../../components/StarRating/StarRating.styled";

export function ProductPage() {
  const navigate = useNavigate();
  const dynamicProduct = useAppSelector(store => store.products.dynamicProduct);

  return (
    <>
      <Button onClick={() => navigate(-1)}>Вернуться назад</Button>
      <MainWrapper>
        <ContentWrapper>
          <ContentTop>
            <Image src={dynamicProduct?.image} alt="product" />
          </ContentTop>
          <ContentBottom>
            <div>
              <RatingWrapper>
                <span>{dynamicProduct?.rating.rate} / 5 </span>
                <StarRating />
              </RatingWrapper>
              <ProductPrice>{dynamicProduct?.price}</ProductPrice>
            </div>
            <ProductTitle>{dynamicProduct?.title}</ProductTitle>
            <Description>{dynamicProduct?.description}</Description>
          </ContentBottom>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
}
