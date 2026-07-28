import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from "@tanstack/react-router";

import Login from "../pages/Login/Login";
import TrainSearch from "../pages/TrainSearch/TrainSearch";
import TrainList from "../pages/TrainList/TrainList";
import BookedTicket from "../pages/BookedTicket/BookedTicket";
import BookedHistory from "../pages/BookedHistory/BookedHistory";

/* Root Route */

const rootRoute = createRootRoute({
    component: () => <Outlet />,
});

/* Login */

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Login,
});

/* Train Search */

const trainSearchRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Railway/Train-Search",
    component: TrainSearch,
});

/* Train List */

const trainListRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Railway/Train-List",
    component: TrainList,
});

/* Booked Ticket */

const bookedTicketRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Railway/Booked-Ticket",
    component: BookedTicket,
});

/* Booked History */

const bookedHistoryRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/Railway/Booked-History",
    component: BookedHistory,
});

/* Route Tree */

const routeTree = rootRoute.addChildren([
    loginRoute,
    trainSearchRoute,
    trainListRoute,
    bookedTicketRoute,
    bookedHistoryRoute
]);

/* Router */

export const router = createRouter({
    routeTree,
});