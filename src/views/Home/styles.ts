import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

export const Center = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Background = styled.img`
  z-index: 2;
  opacity: 0.1;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 480px) {
    left: 60%;
  }
`;

export const BlurScreen = styled.div<{ requesting: boolean }>`
  width: 100vw;
  height: 100vh;
  transition: filter 2s linear 2s;
  filter: ${props => (props.requesting ? "blur(12px)" : "none")};
`;
