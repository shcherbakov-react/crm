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
import { ManualClientsPage } from 'pages/ManualClientsPage';
import { ClientPage } from 'pages/ClientPage/ui/ClientPage';
import { TariffsPage } from 'pages/TariffsPage';
import { OrderPage } from 'pages/OrderPage';
import { ManualsAddressPage } from 'pages/MaualsAddressPage';
import { UnitsOfMeasurementPage } from "pages/UnitsOfMeasurementPage/ui/UnitsOfMeasurementPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
    ORDERS = 'orders',
    ORDER = 'order',
    STORAGE = 'storage',
    ACCOUNTING = 'accounting',
    ADMINISTRATION = 'admin',
    ACCOUNT = 'account',
    SCHEDULE = 'schedule',
    MARKETING = 'marketing',

    MANUALS = 'manuals',
    MANUAL_CLIENT = 'manualClient',
    MANUAL_ADDRESS_LIST = 'manualAddressList',
    MANUAL_UNITS_LIST = 'manualUnitsList',

    REPORTS = 'reports',
    NEWBRANCH = 'newBranch',
    BRANCHES = 'branches',
    LOGIN = 'login',
    USERS = 'users',
    ROLES = 'roles',
    DELIVERY = 'delivery',
    MANUAL_CLIENTS = 'manualClients',
    TARIFFS = 'tariffs',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',

    [AppRoutes.ORDERS]: '/orders',
    [AppRoutes.ORDER]: '/orders/:id',

    [AppRoutes.STORAGE]: '/storage',
    [AppRoutes.ACCOUNTING]: '/accounting',
    [AppRoutes.MARKETING]: '/marketing',
    [AppRoutes.REPORTS]: '/report',
    [AppRoutes.SCHEDULE]: '/schedule',
    [AppRoutes.ADMINISTRATION]: '/admin',
    [AppRoutes.ACCOUNT]: '/account',
    [AppRoutes.DELIVERY]: '/delivery',
    [AppRoutes.BRANCHES]: '/branches',
    [AppRoutes.NEWBRANCH]: '/branches/new',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.ROLES]: '/roles',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.TARIFFS]: '/account/tariffs',

    // Справочкники
    [AppRoutes.MANUALS]: '/manuals',
    [AppRoutes.MANUAL_CLIENTS]: '/manual/clients',
    [AppRoutes.MANUAL_CLIENT]: '/manual/clients/add',
    [AppRoutes.MANUAL_CLIENT]: '/manual/clients/:clientId',
    [AppRoutes.MANUAL_ADDRESS_LIST]: '/manual/address',
    [AppRoutes.MANUAL_UNITS_LIST]: '/manual/units',

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
    [AppRoutes.ORDER]: {
        path: RoutePath.order,
        authOnly: true,
        element: <OrderPage />,
    },

    [AppRoutes.TARIFFS]: {
        path: RoutePath.tariffs,
        authOnly: true,
        element: <TariffsPage />,
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
    [AppRoutes.MANUAL_CLIENTS]: {
        path: RoutePath.manualClients,
        authOnly: true,
        element: <ManualClientsPage />,
    },
    [AppRoutes.MANUAL_CLIENT]: {
        path: RoutePath.manualClient,
        authOnly: true,
        element: <ClientPage />,
    },
    [AppRoutes.MANUAL_ADDRESS_LIST]: {
        path: RoutePath.manualAddressList,
        authOnly: true,
        element: <ManualsAddressPage />,
    },
    [AppRoutes.MANUAL_UNITS_LIST]: {
        path: RoutePath.manualUnitsList,
        authOnly: true,
        element: <UnitsOfMeasurementPage />,
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
