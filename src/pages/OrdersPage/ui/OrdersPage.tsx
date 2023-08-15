import * as React from 'react'
import cls from './OrdersPage.module.scss'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import moment from 'moment/moment';
import { getPaymentType, getStatusCode, Person } from 'pages/OrdersPage/model/types/OrdersPageStatus';
import { OutletTitle } from 'pages/OrdersPage/ui/OutletTitle';
import { TableAction } from 'pages/OrdersPage/ui/TableAction/TableAction';
import { Map } from 'pages/OrdersPage/ui/Map/Map';
import { Input, TypeInput } from 'shared/ui/Input/Input';


const defaultData: Person[] = [
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
]

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('id', {
        header: () => '#',
        cell: info => <Input id={`${info.getValue()}`} type={TypeInput.CHECKBOX} />,
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

export const OrdersPage = () => {
    const [data, setData] = React.useState(() => [...defaultData])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div>
            <Map />
            <TableAction />
            <table className={cls.table}>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr className={cls.header} key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th className={cls.cell} key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr className={cls.row} key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td className={cls.cell} key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
