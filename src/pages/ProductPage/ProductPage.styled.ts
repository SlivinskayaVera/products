import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  justify-items: center;
  column-gap: 30px;
  row-gap: 40px;
  margin: 10px;
`;

export const ContentWrapper = styled.div`
  max-width: 625px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 5px;

  @media (max-width: 475px) {
    width: 275px;
  }
`;

export const ContentTop = styled.div`
  flex: 0 0 320px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;

export const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.2s;
`;

export const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 10px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`;
export const ProductTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 21px;
  line-height: 150%;
  color: #414141;
  text-align: start;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #414141;
  text-align: start;
`;
