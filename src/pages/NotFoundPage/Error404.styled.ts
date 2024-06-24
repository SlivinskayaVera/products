import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  padding: 25px;
  width: 100%;
`;

export const TextError = styled.p`
  color: black;
  text-align: center;
  font-size: 24px;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
