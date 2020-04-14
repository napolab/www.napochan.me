import React from "react";
import { Icon } from "components/Icon";
import { Center, Background, BlurScreen, Container } from "./styles";
import { useEnhance } from "./enhance";

export function Home() {
  const { image, requesting } = useEnhance();
  return (
    <Container>
      <BlurScreen requesting={requesting}>
        <Background src={image || ""} />
        <Center>
          <a href="https://twitter.com/naporin24690" target="_blank" rel="noopener noreferrer" style={{ zIndex: 3 }}>
            <Icon src={image || ""} size={30} />
          </a>
        </Center>
      </BlurScreen>
    </Container>
  );
}
