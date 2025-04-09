import React from "react";
import { HeaderAuthenticatedScreens } from "@/components/HeaderAuthenticatedScreens";
import { Container, ScrollContainer } from "./styles";

function OwnerClientsScreen() {
  return (
    <Container>
      <HeaderAuthenticatedScreens />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        {/* Clients content here */}
      </ScrollContainer>
    </Container>
  );
}

export { OwnerClientsScreen };
