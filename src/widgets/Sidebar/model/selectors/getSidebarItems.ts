import ClientsIcon from 'shared/assets/icons/sidebar/clients.svg';
import OrderIcon from 'shared/assets/icons/sidebar/orders.svg';
import CallsIcon from 'shared/assets/icons/sidebar/phone.svg';
import MontagesIcon from 'shared/assets/icons/sidebar/montages.svg';
import FinanceIcon from 'shared/assets/icons/sidebar/dollar.svg';
import UserIcon from 'shared/assets/icons/sidebar/user.svg';

import { SidebarItemType } from '../types/sidebar';

export const useSidebarItems = () => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: '/clients',
            Icon: ClientsIcon,
            text: 'Клиенты',
        },
        {
            path: '/orders',
            Icon: OrderIcon,
            text: 'Заказы',
        },
        {
            path: '/calls',
            Icon: CallsIcon,
            text: 'Звонки',
        },
        {
            path: '/montages',
            Icon: MontagesIcon,
            text: 'Монтажи',
        },
        {
            path: '/finance',
            Icon: FinanceIcon,
            text: 'Финансы',
        },
        {
            path: '/users',
            Icon: UserIcon,
            text: 'Пользователи',
        },
    ];

    return sidebarItemsList;
};
