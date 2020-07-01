import React from "react";
import styled from "styled-components";

type Props = {
  level?: 1 | 2 | 3 | 4;
};

export const Title: React.FC<Props> = ({ level, children }) => {
  switch (level) {
    case 1:
      return <H1>{children}</H1>;
    case 2:
      return <H2>{children}</H2>;
    case 3:
      return <H3>{children}</H3>;
    case 4:
      return <H4>{children}</H4>;
    default:
      return <H1>{children}</H1>;
  }
};

const H1 = styled.h1``;
const H2 = styled.h2``;
const H3 = styled.h3``;
const H4 = styled.h4`
  margin-top: 48px;
  margin-bottom: 18px;
  &:first-child {
    margin-top: 0;
  }
`;
