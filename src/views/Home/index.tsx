import React from "react";
import { Icon } from "components/Icon";
import icon from "assets/napo-spring-2020.png";
import { Center, Background } from "./styles";
import { useEnhance } from "./enhance";

export function Home() {
  useEnhance();
  return (
    <React.Fragment>
      <Center>
        <a href="https://twitter.com/naporin24690" target="_blank" rel="noopener noreferrer" style={{ zIndex: 3 }}>
          <Icon src={icon} size={18} />
        </a>
        <Background src={icon} />
      </Center>
    </React.Fragment>
  );
}
