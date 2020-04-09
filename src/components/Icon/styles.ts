import styled from "styled-components";

export const Container = styled.img<{ size: number }>`
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 12px 15px #00000029;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
`;
