import styled, { keyframes } from "styled-components";

export const Container = styled.div<{ requesting: boolean }>`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background: #fff3f5;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  writing-mode: vertical-rl;
`;

const IconAnim = keyframes`
  0% {
    opacity: 0;
    filter: blur(6px);
  }

  100% {
    opacity: 1;
  }
`;

export const Center = styled.div<{ show: boolean }>`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  animation: ${IconAnim} 3s ease-in-out;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
`;

export const Background = styled.img`
  z-index: 2;
  opacity: 0.3;
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
