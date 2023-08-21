import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { OrdersPage } from 'pages/OrdersPage';
import { SchedulePage } from 'pages/SchedulePage';
import { AccountPage } from 'pages/AccountPage';


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
    ORDERS = 'orders',
    ADMINISTRATION = 'admin',
    ACCOUNT = 'account',
    SCHEDULE = 'schedule',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ORDERS]: '/orders',
    [AppRoutes.SCHEDULE]: '/schedule',
    [AppRoutes.ADMINISTRATION]: '/admin',
    [AppRoutes.ACCOUNT]: '/account',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ORDERS]: {
        path: RoutePath.orders,
        element: <OrdersPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,

    },
    [AppRoutes.SCHEDULE]: {
        path: RoutePath.schedule,
        element: <SchedulePage />,
    },
    [AppRoutes.ADMINISTRATION]: {
        path: RoutePath.admin,
        element: <SchedulePage />,
    },
    [AppRoutes.ACCOUNT]: {
        path: RoutePath.account,
        element: <AccountPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
