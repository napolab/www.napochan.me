import React from "react";
import { Icon } from "components/Icon";
import icon from "assets/napo-spring-2020.png";
import { Center, Background } from "./styles";
import { useEnhance } from "./enhance";

export function Home() {
  useEnhance();
  return (
    <React.Fragment>
      <a href="https://twitter.com/naporin24690" target="_blank" rel="noopener noreferrer">
        <Center>
          <Icon src={icon} size={18} />
          <Background src={icon} />
        </Center>
      </a>
    </React.Fragment>
  );
}
