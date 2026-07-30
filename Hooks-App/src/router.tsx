import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import UseStateDemo from "./pages/UseStateDemo";
import UseEffectDemo from "./pages/UseEffectDemo";
import UseRefDemo from "./pages/UseRefDemo";
import UseMemoDemo from "./pages/UseMemoDemo";

const rootRoute = createRootRoute({
  component: MainLayout,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

const useStateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/use-state",
  component: UseStateDemo,
});

const useEffectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/use-effect",
  component: UseEffectDemo
})

const useRefRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/use-ref",
    component: UseRefDemo
});

const useMemoRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/use-memo",
    component: UseMemoDemo
});

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  useStateRoute,
  useEffectRoute,
  useRefRoute,
  useMemoRoute,
]);

export const router = createRouter({
  routeTree,
});