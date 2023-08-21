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
            Icon: MontagesIcon,
            text: 'Расписание',
            isOpen: false,
            nested: [
                {
                    path: '/workload',
                    text: 'График нагрузки',
                    Icon: UserIcon,
                },
                {
                    path: '/schedule',
                    text: 'Расписание сотрудников',
                    Icon: UserIcon,
                },
                {
                    path: '/patterns',
                    text: 'Шаблоны нагрузки',
                    Icon: UserIcon,
                },
            ]
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
            Icon: UserIcon,
            text: 'Администрирование',
            isOpen: false,
            nested: [
                {
                    path: '/account',
                    text: 'Аккаунт',
                    Icon: UserIcon,
                },
                {
                    path: '/branches',
                    text: 'Точки продаж',
                    Icon: UserIcon,
                },
                {
                    path: '/roles',
                    text: 'Роли ',
                    Icon: UserIcon,
                },
                {
                    path: '/users',
                    text: 'Пользователи',
                    Icon: UserIcon,
                },
                {
                    path: '/modules',
                    text: 'Дополнительные модули',
                    Icon: UserIcon,
                },
                {
                    path: '/docs',
                    text: 'Документация',
                    Icon: UserIcon,
                },
            ]
        },
    ];

    return sidebarItemsList;
};
