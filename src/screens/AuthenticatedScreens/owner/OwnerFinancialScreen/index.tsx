import React from "react";
import { HeaderAuthenticatedScreens } from "@/components/HeaderAuthenticatedScreens";
import { Container, ScrollContainer } from "./styles";

function OwnerFinancialScreen() {
  return (
    <Container>
      <HeaderAuthenticatedScreens />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        {/* Financial content here */}
      </ScrollContainer>
    </Container>
  );
}

export { OwnerFinancialScreen };
