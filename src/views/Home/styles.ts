import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 3;
`;

export const Background = styled.img`
  opacity: 0.1;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  left: 20%;
`;

export const BlurScreen = styled.div<{ requesting: boolean }>`
  width: 100vw;
  height: 100vh;
  transition: filter 2s linear 2s;
  filter: ${props => (props.requesting ? "blur(12px)" : "none")};
`;
