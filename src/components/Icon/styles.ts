import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100%: {
    opacity: 1;
  }
`;

export const Container = styled.img<{ size: number }>`
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 12px 15px #00000029;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  max-width: 90vw;
  max-height: 90vw;
`;
