import React from "react";
import { Icon } from "components/Icon";
import { Center, Background, Container } from "./styles";
import { useEnhance } from "./enhance";

export function Home() {
  const { image, requesting } = useEnhance();
  return (
    <Container requesting={requesting}>
      <Background src={image || ""} />
      <a href="https://twitter.com/naporin24690" target="_blank" rel="noopener noreferrer" style={{ zIndex: 3 }}>
        <Center show={requesting}>
          <Icon src={image || ""} />
        </Center>
      </a>
    </Container>
  );
}
