import React from "react";
import { Container } from "./styles";

type Props = {
  src: string;
  size: number;
};

export function Icon(props: Props) {
  return <Container src={props.src} size={props.size} />;
}
