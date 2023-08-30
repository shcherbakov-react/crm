import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { OrdersPage } from 'pages/OrdersPage';
import { SchedulePage } from 'pages/SchedulePage';
import { AccountPage } from 'pages/AccountPage';
import { BranchesList } from 'feature/BranchesList';
import { BranchesPage } from 'pages/BranchesPage/ui/BranchesPage';
import { UsersPage } from 'pages/UsersPage';
import { LoginPage } from 'pages/LoginPage';
import { AddBranch } from 'entities/Branches';


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
    ORDERS = 'orders',
    ADMINISTRATION = 'admin',
    ACCOUNT = 'account',
    SCHEDULE = 'schedule',
    NEWBRANCH = 'newBranch',
    BRANCHES = 'branches',
    LOGIN = 'login',
    USERS = 'users',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ORDERS]: '/orders',
    [AppRoutes.SCHEDULE]: '/schedule',
    [AppRoutes.ADMINISTRATION]: '/admin',
    [AppRoutes.ACCOUNT]: '/account',
    [AppRoutes.BRANCHES]: '/branches',
    [AppRoutes.NEWBRANCH]: '/branches/new',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.LOGIN]: '/login',
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
    [AppRoutes.BRANCHES]: {
        path: RoutePath.branches,
        element: <BranchesPage />,
    },
    [AppRoutes.NEWBRANCH]: {
        path: RoutePath.newBranch,
        element: <AddBranch />,
    },
    [AppRoutes.USERS]: {
        path: RoutePath.users,
        element: <UsersPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
