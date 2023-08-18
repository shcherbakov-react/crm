import ClientsIcon from 'shared/assets/icons/sidebar/clients.svg';
import OrderIcon from 'shared/assets/icons/sidebar/orders.svg';
import MontagesIcon from 'shared/assets/icons/sidebar/montages.svg';
import FinanceIcon from 'shared/assets/icons/sidebar/dollar.svg';
import UserIcon from 'shared/assets/icons/sidebar/user.svg';

import { SidebarItemType } from '../types/sidebar';

export const useSidebarItems = () => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: '/orders',
            Icon: OrderIcon,
            text: 'Заказы',
        },
        {
            path: '/delivery',
            Icon: ClientsIcon,
            text: 'Доставка',
        },

        {
            path: '/schedule',
            Icon: MontagesIcon,
            text: 'Расписание смен',
        },
        {
            path: '/storage',
            Icon: FinanceIcon,
            text: 'Склад',
        },
        {
            path: '/accounting',
            Icon: MontagesIcon,
            text: 'Бухгалтерия',
        },
        {
            path: '/marketing',
            Icon: UserIcon,
            text: 'Маркетинг',
        },
        {
            path: '/report',
            Icon: UserIcon,
            text: 'Отчеты и аналитика',
        },
        {
            path: '/report',
            Icon: UserIcon,
            text: 'Справочники',
        },
        {
            // path: '/administration',
            Icon: UserIcon,
            text: 'Администрирование',
            nested: [
                {
                    path: '/account',
                    text: 'Аккаунт',
                    Icon: UserIcon,
                },
            ]
        },
    ];

    return sidebarItemsList;
};
