import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";

import Tailwind from "./pages/Tailwind/Tailwind";
import Spacing from "./pages/Tailwind/Spacing";
import Colors from "./pages/Tailwind/Colors";
import Lucide from "./pages/Lucide/Lucide";
import Shadcn from "./pages/Shadcn/Shadcn";
import Typography from "./pages/Tailwind/Typography";
import WidthHeight from "./pages/Tailwind/WidthHeight";
import Flex from "./pages/Tailwind/Flex";
import Grid from  "./pages/Tailwind/Grid";
import Border from "./pages/Tailwind/Border";
import Shadow from "./pages/Tailwind/Shadow";
import Position from "./pages/Tailwind/Position";
import Responsive from "./pages/Tailwind/Responsive";
import TransformTransition from "./pages/Tailwind/Transition";
import Animation from "./pages/Tailwind/Animation";
import DarkMode from "./pages/Tailwind/DarkMode";
import PseudoClasses from "./pages/Tailwind/PseudoClasses";
import ButtonUI from "./pages/Shadcn/ButtonUI";

const rootRoute = createRootRoute({
  component: MainLayout,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

const tailwindRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind",
  component: Tailwind,
});

const spacingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/spacing",
  component: Spacing,
});

const colorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/colors",
  component: Colors,
});

const typographyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/typography",
  component: Typography
})

const widthHeightRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/width-height",
  component: WidthHeight
})

const flexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/flex",
  component: Flex
})

const gridRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/grid",
  component: Grid
})

const borderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/border",
  component: Border
})

const shadowRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/shadow",
  component: Shadow
})

const positionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/position",
  component: Position
})

const responsiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/responsive",
  component: Responsive
})

const transitionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/transition",
  component: TransformTransition
})

const animationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/animation",
  component: Animation
})

const darkModeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/dark-mode",
  component: DarkMode
})

const pseudoclassRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailwind/pseudo-class",
  component: PseudoClasses
})

const lucideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lucide",
  component: Lucide,
});

const shadcnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shadcn",
  component: Shadcn,
});

const ButtonUIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shadcn/button",
  component: ButtonUI,
});

const routeTree = rootRoute.addChildren([
  dashboardRoute,

  tailwindRoute,
  spacingRoute,
  colorsRoute,
  typographyRoute,
  widthHeightRoute,
  flexRoute,
  gridRoute,
  borderRoute,
  shadowRoute,
  positionRoute,
  responsiveRoute,
  transitionRoute,
  animationRoute,
  darkModeRoute,
  pseudoclassRoute,

  lucideRoute,

  shadcnRoute,
  ButtonUIRoute,
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}