import React from "react";
import { Icon } from "components/Icon";
import { Center, Background, Container } from "./styles";
import { useEnhance } from "./enhance";

export function Home() {
  const { image, requesting } = useEnhance();
  return (
    <Container requesting={requesting}>
      <Background src={image || ""} />
      <Center show={requesting}>
        <a href="https://twitter.com/naporin24690" target="_blank" rel="noopener noreferrer" style={{ zIndex: 3 }}>
          <Icon src={image || ""} />
        </a>
      </Center>
    </Container>
  );
}
