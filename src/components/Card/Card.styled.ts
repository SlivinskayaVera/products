import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 225px;
  height: 350px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  transition: 0.2s;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 5px;

  &:hover {
    box-shadow: 4px 8px 16px rgba(100, 99, 99, 0.2);
  }
`;

export const CardTop = styled.div`
  flex: 0 0 220px;
  position: relative;
  overflow: hidden;
`;

export const CardImage = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 10px;
`;

export const CardPrice = styled.div`
  font-weight: 700;
  font-size: 19px;
  color: #414141;
  display: flex;
  flex-wrap: wrap-reverse;

  &::after {
    content: "$";
    margin-left: 4px;
    position: relative;
  }
`;

export const CardTitle = styled.a`
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 17px;
  line-height: 150%;
  color: #414141;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: #ff6633;
  }
`;