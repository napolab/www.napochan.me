import styled from "styled-components";

export const Container = styled.img<{ size: number }>`
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 12px 15px #00000029;
  width: 512px;
  height: 512px;
  @media screen and (max-width: 480px) {
    width: 256px;
    height: 256px;
  }
  max-width: 90vw;
  max-height: 90vw;
`;
