import React from "react";
import { Container } from "./styles";

type Props = {
  src: string;
};

export function Icon(props: Props) {
  const { src } = props;
  return <Container src={src} />;
}
