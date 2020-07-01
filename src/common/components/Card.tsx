import React, { CSSProperties, useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";
import styled, { css } from "styled-components";

type Props = {
  title: string;
  className?: string;
  styles?: CSSProperties;
  delayInitialMount?: number;
};

const Card: React.FC<Props> = ({ title, children, className, delayInitialMount }) => {
  const mountableRef = useRef<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, updateVisible] = useState(false);
  const intersection = useIntersection(ref, { root: null, rootMargin: "0px", threshold: 0.2 });

  useEffect(() => {
    const id = setTimeout(() => {
      mountableRef.current = true;
    }, delayInitialMount || 0);

    return () => {
      clearTimeout(id);
    };
  }, [delayInitialMount]);

  useEffect(() => {
    if (!intersection?.isIntersecting) return;
    const delay = mountableRef.current ? 0 : delayInitialMount ?? 0;

    const id = setTimeout(() => {
      updateVisible(true);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delayInitialMount, intersection]);

  return (
    <Container className={className} ref={ref} visible={visible}>
      <Header>{title}</Header>
      <Body>{children}</Body>
      <Dummy>{title}</Dummy>
    </Container>
  );
};

export default Card;

const Container = styled.div<{ visible: boolean }>`
  position: relative;
  width: auto;
  height: auto;
  min-height: 96px;
  box-sizing: border-box;
  border-radius: 8px;
  background: ${(props) => props.theme.base};
  padding: 16px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.16);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  @media screen and (max-width: 480px) {
    min-height: 64px;
  }
`;

const Header = styled.h3`
  position: absolute;
  bottom: 8px;
  right: 16px;
  opacity: 0.2;

  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 48px;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Dummy = styled.div`
  opacity: 0;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 48px;
  color: ${(props) => props.theme.secondary};
  max-height: 0;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Body = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.secondary};
`;
