import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Link } from 'react-router-dom';
import { OutletTitle } from 'shared/ui/OutletTitle/OutletTitle';
import moment from 'moment';
import {
    getPaymentType,
    getStatusCode,
    OrderSchema,
} from '../types/OrderSchema';

export const OrdersListData: OrderSchema[] = [
    {
        id: '52354',
        outlet: {
            outletId: 1,
            outletTitle: 'Авокадо',
            outletTitleColor: '#027A48',
        },
        statusId: 2,
        date: 1692008533,
        deliveryTime: 1795119533,
        deliveryOnTime: 1795189533,
        paymentType: 2,
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        district: 'Центр',
        person: 1,
        isRecall: true,
        paymentInfo: {
            cardNumber: '6486 8435 7894 8888',
            sum: 500,
            sumWithSale: 450,
            numOfSale: 10,
            paymentStatus: 500,
        },
        comment: 'Когда приедите, позвоните, я выйду',
    },
    {
        id: '52355',
        outlet: {
            outletId: 1,
            outletTitle: 'Авокадо',
            outletTitleColor: '#027A48',
        },
        statusId: 2,
        date: 1692008533,
        deliveryTime: 1795119533,
        deliveryOnTime: 1795189533,
        paymentType: 2,
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        district: 'Центр',
        person: 1,
        isRecall: true,
        paymentInfo: {
            cardNumber: '6486 8435 7894 8888',
            sum: 500,
            sumWithSale: 450,
            numOfSale: 10,
            paymentStatus: 500,
        },
        comment: 'Когда приедите, позвоните, я выйду',
    },
    {
        id: '52356',
        outlet: {
            outletId: 1,
            outletTitle: 'Авокадо',
            outletTitleColor: '#027A48',
        },
        statusId: 2,
        date: 1692008533,
        deliveryTime: 1795119533,
        deliveryOnTime: 1795189533,
        paymentType: 2,
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        district: 'Центр',
        person: 1,
        isRecall: true,
        paymentInfo: {
            cardNumber: '6486 8435 7894 8888',
            sum: 500,
            sumWithSale: 450,
            numOfSale: 10,
            paymentStatus: 500,
        },
        comment: 'Когда приедите, позвоните, я выйду',
    },
];

export const columnHelper = createColumnHelper<OrderSchema>();
export const OrdersListColumns = [
    columnHelper.accessor('id', {
        header: () => '#',
        cell: (info) => <Checkbox id={info.getValue()} />,
    }),
    columnHelper.accessor((row) => row.outlet, {
        id: 'outletTitle',
        header: () => 'ТТ',
        cell: (info) => <OutletTitle outlet={info.getValue()} />,
    }),
    columnHelper.accessor('id', {
        header: (info) => 'Номер заказа',
        cell: (info) => (
            <Link to={`/orders/${info.getValue()}`}>{info.getValue()}</Link>
        ),
    }),
    columnHelper.accessor('statusId', {
        header: () => 'Статус',
        cell: (info) => getStatusCode(info.renderValue()),
    }),
    columnHelper.accessor('date', {
        header: () => 'Оформлен',
        cell: (info) =>
            moment(info.renderValue()).lang('ru').format('DD MMMM - HH.mm'),
    }),
    columnHelper.accessor('deliveryTime', {
        header: () => 'Доставлен до',
        cell: (info) => moment(info.renderValue()).lang('ru').format('HH.mm'),
    }),
    columnHelper.accessor('paymentType', {
        header: () => 'Тип оплаты',
        cell: (info) => getPaymentType(info.renderValue()),
    }),
    columnHelper.accessor('initials', {
        header: () => 'ФИО',
    }),
    columnHelper.accessor('phone', {
        header: 'Телефон',
    }),
    columnHelper.accessor('address', {
        header: 'Адрес',
    }),
    columnHelper.accessor('district', {
        header: 'Район',
    }),
    columnHelper.accessor('person', {
        header: 'Персон',
    }),
    columnHelper.accessor('comment', {
        header: 'Комментарий',
    }),
];
