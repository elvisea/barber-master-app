import React from "react";

import { Container, ScrollContainer } from "./styles";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { HorizontalList } from "@/components/HorizontalList";

import { Divider } from "@/components/Divider";
import { DateSelector } from "@/components/DateSelector";
import { HeaderAuthenticatedScreens } from "@/components/HeaderAuthenticatedScreens";

import { QuickAccess } from "@/components/Dashboard/QuickAccess";
import { FinancialCard } from "@/components/Dashboard/FinancialCard";

import {
  appointments,
  dailyMetrics,
  financialCards,
  performanceCards,
  quickAccess,
} from "./constants";

import { useOwnerDashboard } from "./hooks/useOwnerDashboard";

function OwnerDashboardScreen() {
  const { navigateToSelectedQuickAccess } = useOwnerDashboard();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  // Adicionar a função para lidar com a mudança de data
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const renderFinancialCards = () => {
    return financialCards.map((item, index) => (
      <FinancialCard
        key={index}
        value={item.value}
        title={item.title}
        icon={item.icon}
        iconColor={item.iconColor}
        titleColor={item.titleColor}
        bg={item.bg}
      />
    ));
  };

  const renderQuickAccessCards = () => {
    return quickAccess.map((item) => (
      <QuickAccess
        key={item.title}
        icon={item.icon}
        title={item.title}
        onPress={() => navigateToSelectedQuickAccess(item.screen)}
      />
    ));
  };

  const renderSchedulingCards = () => {
    return appointments.map((item, index) => (
      <FinancialCard
        key={index}
        value={item.value}
        title={item.title}
        icon={item.icon}
        iconColor={item.iconColor}
      />
    ));
  };

  const renderPerformanceCards = () => {
    return performanceCards.map((item, index) => (
      <FinancialCard
        key={index}
        value={item.value}
        title={item.title}
        icon={item.icon}
        iconColor={"white"}
      />
    ));
  };

  const renderDailyMetrics = () => {
    return dailyMetrics.map((item, index) => (
      <FinancialCard
        key={index}
        value={item.value}
        title={item.title}
        icon={item.icon}
        iconColor={"white"}
      />
    ));
  };

  return (
    <Container>
      <HeaderAuthenticatedScreens />

      <ScrollContainer showsVerticalScrollIndicator={false}>

        <Section mt={0} mb={16}>
          <Typography title="Selecione uma data" />
          <DateSelector
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </Section>

        <Divider />

        <Section mt={16} mb={24}>
          <Typography title="Acesso rápido" />
          <HorizontalList>{renderQuickAccessCards()}</HorizontalList>
        </Section>

        <Divider />

        <Section mt={16} mb={24}>
          <Typography title="Resumo Financeiro" />
          <HorizontalList>{renderFinancialCards()}</HorizontalList>
        </Section>

        <Divider />

        <Section mt={16} mb={24}>
          <Typography title="Métricas do Dia" />
          <HorizontalList>{renderDailyMetrics()}</HorizontalList>
        </Section>

        <Divider />

        <Section mt={16} mb={24}>
          <Typography title="Desempenho" />
          <HorizontalList>{renderPerformanceCards()}</HorizontalList>
        </Section>

        <Divider />

        <Section mt={16} mb={32}>
          <Typography title="Agenda de Hoje" />
          <HorizontalList>{renderSchedulingCards()}</HorizontalList>
        </Section>

      </ScrollContainer>
    </Container>
  );
}

export { OwnerDashboardScreen };
