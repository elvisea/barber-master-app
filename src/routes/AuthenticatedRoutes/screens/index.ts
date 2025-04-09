import { Screens } from "../types";

// Screens
import { OwnerDashboardScreen } from "@/screens/AuthenticatedScreens/owner/OwnerDashboardScreen";
import { EmployeeDashboardScreen } from "@/screens/AuthenticatedScreens/employee/EmployeeDashboardScreen";
import { OwnerAppointmentsScreen } from "@/screens/AuthenticatedScreens/owner/OwnerAppointmentsScreen";
import { OwnerFinancialScreen } from "@/screens/AuthenticatedScreens/owner/OwnerFinancialScreen";
import { OwnerClientsScreen } from "@/screens/AuthenticatedScreens/owner/OwnerClientsScreen";

// Stacks
import { OwnerEstablishmentStackRoutes } from "@/routes/OwnerEstablishmentStackRoutes/owner-establishment-stack.routes";
import { OwnerServicesStackRoutes } from "@/routes/owner-services-stack-routes/owner-services-stack.routes";
import { OwnerEmployessStackRoutes } from "@/routes/owner-employees-stack-routes/owner-employees-stack-routes";

const screens: Screens = {
  ADMIN: [
    {
      name: "OwnerDashboardScreen",
      icon: "home",
      title: "Inicio",
      component: OwnerDashboardScreen,
    },

    {
      name: "OwnerAppointmentsScreen",
      icon: "calendar-today",
      title: "Agendamentos",
      component: OwnerAppointmentsScreen,
    },

    {
      name: "OwnerFinancialScreen",
      icon: "attach-money",
      title: "Financeiro",
      component: OwnerFinancialScreen,
    },

    {
      name: "OwnerEstablishmentStackRoutes",
      icon: "store",
      title: "Estabelecimentos",
      component: OwnerEstablishmentStackRoutes,
    },

    {
      name: "OwnerServicesStackRoutes",
      icon: "room-service",
      title: "Serviços",
      component: OwnerServicesStackRoutes,
    },

    {
      name: "OwnerEmployessStackRoutes",
      icon: "group",
      title: "Funcionários",
      component: OwnerEmployessStackRoutes,
    },

    {
      name: "OwnerClientsScreen",
      icon: "contacts",
      title: "Clientes",
      component: OwnerClientsScreen,
    },
  ],

  EMPLOYEE: [
    {
      name: "EmployeeDashboardScreen",
      icon: "home",
      title: "Inicio",
      component: EmployeeDashboardScreen,
    },
  ],

  OWNER: [],
};

export default screens;
