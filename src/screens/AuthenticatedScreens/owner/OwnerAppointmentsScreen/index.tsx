import React from "react";
import { HeaderAuthenticatedScreens } from "@/components/HeaderAuthenticatedScreens";
import { Container, ScrollContainer } from "./styles";

function OwnerAppointmentsScreen() {
  return (
    <Container>
      <HeaderAuthenticatedScreens />
      <ScrollContainer showsVerticalScrollIndicator={false}>
        {/* Appointments content here */}
      </ScrollContainer>
    </Container>
  );
}

export { OwnerAppointmentsScreen };
