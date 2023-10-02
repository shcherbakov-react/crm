import { Input } from 'shared/ui/Input/Input';
import { OutletTitle } from 'shared/ui/OutletTitle/OutletTitle';
import { getPaymentType, getStatusCode, Person } from 'pages/OrdersPage/model/types/OrdersPageStatus';
import { createColumnHelper } from '@tanstack/react-table';
import moment from 'moment';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

export const defaultData: Person[] = [
    {
        id: 52354,
        outlet: {
            outletId: 1,
            outletTitle: 'Авокадо',
            outletTitleColor: '#027A48',
        },
        statusId: 2,
        date: 1692008533,
        deliveryTime: 1795119533,
        paymentType: 2,
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        district: 'Центр',
        person: 1,
        sum: 2253,
        comment: 'Когда приедите, позвоните, я выйду',
    },
    {
        id: 52355,
        outlet: {
            outletId: 2,
            outletTitle: 'Сушитайм',
            outletTitleColor: '#A259FF',
        },
        statusId: 3,
        date: 1692008533,
        deliveryTime: 1795119533,
        paymentType: 0,
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        district: 'Центр',
        person: 1,
        sum: 2253,
        comment: 'Когда приедите, позвоните, я выйду',
    },
    {
        id: 52356,
        outlet: {
            outletId: 2,
            outletTitle: 'Сушитайм',
            outletTitleColor: '#A259FF',
        },
        statusId: 3,
        date: 1692008533,
        deliveryTime: 1795119533,
        paymentType: 0,
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        district: 'Центр',
        person: 1,
        sum: 2253,
        comment: 'Когда приедите, позвоните, я выйду',
    },
]
export const columnHelper = createColumnHelper<Person>()
export const columns = [

    columnHelper.accessor('id', {
        header: () => '#',
        cell: info => <Checkbox id={`${info.getValue()}`} />
    }),
    columnHelper.accessor(row => row.outlet, {
        id: 'outletTitle',
        header: () => 'ТТ',
        cell: info => <OutletTitle outlet={info.getValue()} />,
    }),
    columnHelper.accessor('id', {
        header: () => 'Номер заказа',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('statusId', {
        header: () => 'Статус',
        cell: info => getStatusCode(info.renderValue()),
    }),
    columnHelper.accessor('date', {
        header: () => 'Оформлен',
        cell: info => moment(info.renderValue()).lang('ru').format('DD MMMM - HH.mm'),
    }),
    columnHelper.accessor('deliveryTime', {
        header: () => 'Доставлен до',
        cell: info => moment(info.renderValue()).lang('ru').format('HH.mm'),

    }),
    columnHelper.accessor('paymentType', {
        header: () => 'Тип оплаты',
        cell: info => getPaymentType(info.renderValue()),

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
    columnHelper.accessor('sum', {
        header: 'Сумма',
    }),
    columnHelper.accessor('comment', {
        header: 'Комментарий',
    }),
]