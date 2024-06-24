import { Link } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import { Image, ContentWrapper, TextError } from "./Error404.styled";

export default function Error404() {
  return (
    <ContentWrapper>
      <Image src="/404.png" />
      <TextError>
        Ошибка, такой страницы не существует, <br /> вернитесь на{" "}
        <Link to={AppRoutes.HOME}>Главную страницу</Link>
      </TextError>
    </ContentWrapper>
  );
}
