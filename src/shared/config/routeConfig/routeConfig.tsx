import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { OrdersPage } from 'pages/OrdersPage';
import { SchedulePage } from 'pages/SchedulePage';
import { AccountPage } from 'pages/AccountPage';
import { BranchesPage } from 'pages/BranchesPage';
import { UsersPage } from 'pages/UsersPage';
import { LoginPage } from 'pages/LoginPage';
import { AddBranch } from 'entities/Branches';
import { DeliveryPage } from 'pages/DeliveryPage';
import { RolesPage } from 'pages/RolesPage';
import { StoragePage } from 'pages/StoragePage';
import { AccountingPage } from 'pages/AccountingPage';
import { MarketingPage } from 'pages/MarketingPage';
import { ReportPage } from 'pages/ReportPage';
import { ManualsPage } from 'pages/ManualsPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
    ORDERS = 'orders',
    STORAGE = 'storage',
    ACCOUNTING = 'accounting',
    ADMINISTRATION = 'admin',
    ACCOUNT = 'account',
    SCHEDULE = 'schedule',
    MARKETING = 'marketing',
    MANUALS = 'manuals',
    REPORTS = 'reports',
    NEWBRANCH = 'newBranch',
    BRANCHES = 'branches',
    LOGIN = 'login',
    USERS = 'users',
    ROLES = 'roles',
    DELIVERY = 'delivery',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ORDERS]: '/orders',
    [AppRoutes.STORAGE]: '/storage',
    [AppRoutes.ACCOUNTING]: '/accounting',
    [AppRoutes.MARKETING]: '/marketing',
    [AppRoutes.REPORTS]: '/report',
    [AppRoutes.MANUALS]: '/manuals',
    [AppRoutes.SCHEDULE]: '/schedule',
    [AppRoutes.ADMINISTRATION]: '/admin',
    [AppRoutes.ACCOUNT]: '/account',
    [AppRoutes.DELIVERY]: '/delivery',
    [AppRoutes.BRANCHES]: '/branches',
    [AppRoutes.NEWBRANCH]: '/branches/new',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.ROLES]: '/roles',
    [AppRoutes.LOGIN]: '/login',

    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ORDERS]: {
        path: RoutePath.orders,
        authOnly: true,
        element: <OrdersPage />,
    },
    [AppRoutes.STORAGE]: {
        path: RoutePath.storage,
        authOnly: true,
        element: <StoragePage />,
    },
    [AppRoutes.MANUALS]: {
        path: RoutePath.manuals,
        authOnly: true,
        element: <ManualsPage />,
    },
    [AppRoutes.MARKETING]: {
        path: RoutePath.marketing,
        authOnly: true,
        element: <MarketingPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        authOnly: true,
        element: <AboutPage />,
    },
    [AppRoutes.SCHEDULE]: {
        path: RoutePath.schedule,
        authOnly: true,
        element: <SchedulePage />,
    },
    [AppRoutes.REPORTS]: {
        path: RoutePath.reports,
        authOnly: true,
        element: <ReportPage />,
    },
    [AppRoutes.DELIVERY]: {
        path: RoutePath.delivery,
        authOnly: true,
        element: <DeliveryPage />,
    },
    [AppRoutes.ADMINISTRATION]: {
        path: RoutePath.admin,
        authOnly: true,
        element: <SchedulePage />,
    },
    [AppRoutes.ACCOUNT]: {
        path: RoutePath.account,
        authOnly: true,
        element: <AccountPage />,
    },
    [AppRoutes.ACCOUNTING]: {
        path: RoutePath.accounting,
        authOnly: true,
        element: <AccountingPage />,
    },

    // ADMINISTRATION
    [AppRoutes.BRANCHES]: {
        path: RoutePath.branches,
        authOnly: true,
        element: <BranchesPage />,
    },
    [AppRoutes.NEWBRANCH]: {
        path: RoutePath.newBranch,
        authOnly: true,
        element: <AddBranch />,
    },
    [AppRoutes.USERS]: {
        path: RoutePath.users,
        authOnly: true,
        element: <UsersPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.ROLES]: {
        path: RoutePath.roles,
        authOnly: true,
        element: <RolesPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
