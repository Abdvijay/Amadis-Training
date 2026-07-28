import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import Home from "./pages/Home";
import About from "./pages/About";

import { Link } from "@tanstack/react-router";

const rootRoute = createRootRoute({
    component: () =>(
        <div>
            <h2>TanStack Router Demo</h2>
            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/about">About</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    ),
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: About
});

const routeTree = rootRoute.addChildren([
    homeRoute,
    aboutRoute
]);

export const router = createRouter({
    routeTree,
});