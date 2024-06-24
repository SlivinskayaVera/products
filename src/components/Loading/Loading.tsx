import { LoaderElement, LoaderWrapper } from "./Loading.styled";

export function Loading() {
  return (
    <LoaderWrapper>
      <LoaderElement />
      <LoaderElement />
      <LoaderElement />
    </LoaderWrapper>
  );
}
