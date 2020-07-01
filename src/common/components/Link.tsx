import styled from "styled-components";

export const AnchorLink = styled.a`
  color: ${(props) => props.theme.secondary};
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }

  &.active {
    font-weight: 600;
    color: ${(props) => props.theme.primary};
  }
`;
