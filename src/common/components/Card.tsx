import React, { CSSProperties } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  className?: string;
  styles?: CSSProperties;
};

const Card: React.FC<Props> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      <Header>{title}</Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  border: solid 5px ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.base};
  padding: 16px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
`;

const Header = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.secondary};
`;

const Body = styled.div`
  margin-top: 16px;
  font-size: 16px;
  color: ${(props) => props.theme.secondary};
`;
