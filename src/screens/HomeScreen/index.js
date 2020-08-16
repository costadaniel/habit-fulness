import React from "react";
import { Container, StyledText } from "./styles";

export default function HomeScreen({ route }) {
  const { name } = route.params;

  return (
    <Container>
      <StyledText>Hello {name}!</StyledText>
    </Container>
  );
}
