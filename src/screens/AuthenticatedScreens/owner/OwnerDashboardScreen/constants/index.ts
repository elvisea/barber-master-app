import {
  FinancialCardData,
  QuickAccessData,
  DailyAppointmentData,
  MetricCardData,
  PerformanceCardData,
  AppointmentCardData,
} from "../types";

export const financialCards: FinancialCardData[] = [
  {
    title: "Faturamento Hoje",
    value: "R$ 1.250,00",
    icon: "wallet",
    iconColor: "green",
    titleColor: "white",
    bg: "secondary_black",
  },
  {
    title: "Faturamento Mensal",
    value: "R$ 28.350,00",
    icon: "trending-up",
    iconColor: "blue",
    titleColor: "white",
    bg: "secondary_black",
  },
  {
    title: "Vendas do Dia",
    value: "15",
    icon: "shopping",
    iconColor: "primary_purple",
    titleColor: "white",
    bg: "secondary_black",
  },
  {
    title: "Ticket Médio",
    value: "R$ 83,33",
    icon: "tag",
    iconColor: "gold",
    titleColor: "white",
    bg: "secondary_black",
  },
];

export const quickAccess: QuickAccessData[] = [
  {
    title: "Agendamentos",
    icon: "calendar-month",
    screen: "OwnerAppointmentsScreen",
  },
  {
    title: "Clientes",
    icon: "verified-user",
    screen: "OwnerClientsScreen",
  },
  {
    title: "Funcionários",
    icon: "verified-user",
    screen: "OwnerEmployeesScreen",
  },
  {
    title: "Serviços",
    icon: "android",
    screen: "OwnerServicesScreen",
  },
  {
    title: "Financeiro",
    icon: "wallet",
    screen: "OwnerFinancialScreen",
  },
];

export const dailyMetrics: MetricCardData[] = [
  {
    title: "Agendamentos Hoje",
    value: "12/15",
    icon: "calendar",
    iconColor: "primary_purple",
  },
  {
    title: "Em Espera",
    value: "3",
    icon: "clock",
    iconColor: "orange",
  },
  {
    title: "Atendidos",
    value: "9",
    icon: "check-circle",
    iconColor: "green",
  },
  {
    title: "Ocupação",
    value: "80%",
    icon: "chip",
    iconColor: "blue",
  },
];

export const performanceCards: PerformanceCardData[] = [
  {
    title: "Serviço Mais Vendido",
    value: "Corte Degradê",
    icon: "abacus",
    iconColor: "gold",
  },
  {
    title: "Barbeiro Destaque",
    value: "João Silva",
    icon: "account-star",
    iconColor: "gold",
  },
  {
    title: "Taxa de Retorno",
    value: "85%",
    icon: "refresh",
    iconColor: "blue",
  },
];

export const dailyAppointments: DailyAppointmentData[] = [
  {
    title: "Próximo Cliente",
    value: "Carlos Silva - 14:30",
    icon: "user",
    iconColor: "primary_purple",
  },
  {
    title: "Horário Livre",
    value: "15:00 - 15:30",
    icon: "clock",
    iconColor: "green",
  },
  {
    title: "Total Restante",
    value: "6 clientes",
    icon: "users",
    iconColor: "orange",
  },
];

export const appointments: AppointmentCardData[] = [
  {
    title: "Próximo Cliente",
    value: "Carlos Silva - 14:30",
    icon: "account-clock",
    iconColor: "primary_purple",
  },
  {
    title: "Em Andamento",
    value: "João Pedro - Corte",
    icon: "account-circle",
    iconColor: "green",
  },
  {
    title: "Em Espera",
    value: "2 clientes",
    icon: "access-point",
    iconColor: "orange",
  },
  {
    title: "Horários Livres",
    value: "3 horários",
    icon: "calendar-blank",
    iconColor: "blue",
  },
  {
    title: "Cancelamentos",
    value: "1 hoje",
    icon: "calendar-remove",
    iconColor: "red",
  },
  {
    title: "Concluídos",
    value: "8 hoje",
    icon: "check-circle",
    iconColor: "green",
  },
];
