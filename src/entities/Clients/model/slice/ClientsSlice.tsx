import { OutletTitle } from 'shared/ui/OutletTitle/OutletTitle';
import { createColumnHelper } from '@tanstack/react-table';
import moment from 'moment';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import {
    getPaymentType,
    getStatusCode,
    Person,
} from '../types/OrdersPageStatus';

export const ClientsListData: Person[] = [
    {
        id: 'CUST-312-1',
        initials: 'Павел Андреевич',
        statusId: 2,
        ordersCount: 11,
        lastOrderTime: 71232133,
        phones: [79987352563, 79987352124],
        email: 'jsbach@yahoo.com',
        numberCard: '9069',
        address: 'Михайловск, Гоголя 16, кв. 52',
        ordersSum: 12254,
        comment: 'Проблемный клиент',
    },
    {
        id: 'CUST-312-2',
        initials: 'Антон',
        statusId: 2,
        ordersCount: 2,
        lastOrderTime: 71232133,
        phones: [79885872356],
        email: 'kmiller@optonline.net',
        numberCard: '4568',
        address: 'Ставрополь, проспект Кулакова, д.9, кв. 161',
        ordersSum: 1250,
        comment: 'Просят всегда приехать заранее',
    },
];
export const columnHelper = createColumnHelper<Person>();
export const ClientsListColumns = [
    columnHelper.accessor('id', {
        header: () => '#',
        cell: (info) => <Checkbox id={`${info.getValue()}`} />,
    }),
    columnHelper.accessor('id', {
        header: () => 'ID',
        cell: (info) => <div style={{ minWidth: '100px' }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('initials', {
        header: () => 'ФИО',
    }),
    columnHelper.accessor('statusId', {
        header: () => 'Статус',
        cell: (info) => getStatusCode(info.renderValue()),
    }),
    columnHelper.accessor('ordersCount', {
        header: 'Комментарий',
    }),
    columnHelper.accessor('phones', {
        header: () => 'Телефон',
        cell: (info) => info.renderValue().map((item) => (<div>+{item}</div>)),
    }),
    columnHelper.accessor('email', {
        header: 'Email',
    }),
    columnHelper.accessor('lastOrderTime', {
        header: 'Последний заказ',
        cell: (time) => moment(time.renderValue()).lang('ru').format('DD MMMM - HH.mm'),
    }),
    columnHelper.accessor('numberCard', {
        header: 'Номер карты',
    }),
    columnHelper.accessor('address', {
        header: 'Адрес',
    }),
    columnHelper.accessor('ordersSum', {
        header: '₽',
        cell: (info) => <div style={{ minWidth: '100px' }}>{info.getValue().toLocaleString('ru') + ' ₽'}</div>,
    }),
    columnHelper.accessor('comment', {
        header: 'Комментарий',
    }),
];
