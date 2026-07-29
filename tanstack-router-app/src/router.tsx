import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Students from "./pages/Students";

const rootRoute = createRootRoute({
    component: Outlet
});

const dashboardLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/dashboard",
    component: DashboardLayout,
});

const dashboardRoute = createRoute({
    getParentRoute: () => dashboardLayoutRoute,
    path: "/",
    component: Dashboard,
});

const employeesRoute = createRoute({
    getParentRoute: () => dashboardLayoutRoute,
    path: "employees",
    component: Employees,
});

const studentsRoute = createRoute({
    getParentRoute: () => dashboardLayoutRoute,
    path: "students",
    component: Students
});

const routeTree = rootRoute.addChildren([
  dashboardLayoutRoute.addChildren([
    dashboardRoute,
    employeesRoute,
    studentsRoute,
  ]),
]);

export const router = createRouter({
    routeTree,
});