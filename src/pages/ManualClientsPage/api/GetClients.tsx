import {createColumnHelper} from '@tanstack/react-table';
import moment from 'moment';
import {Checkbox} from 'shared/ui/Checkbox/Checkbox';
import {Link} from 'react-router-dom';
import {Client} from "pages/ManualClientsPage/model/types/ManualClientsData";

export const GetClients: Client[] = [
    {
        id: 'CUST-312-1',
        statusId: 2,
        date: 1692008533,
        email: 'jsbach@yahoo.com',
        cardNum: '4568 9069',
        deliveryTime: 1795119533,
        ordersCount: 11,
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        person: 1,
        sum: 2648,
        comment: 'Когда приедите, позвоните, я выйду',
    },
    {
        id: 'CUST-312-2',
        statusId: 3,
        date: 1692008533,
        cardNum: '4568 9069',
        ordersCount: 5,
        email: 'kmiller@optonline.net',
        deliveryTime: 1795119533,
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        person: 1,
        sum: 5211,
        comment: 'Когда приедите, позвоните, я выйду',
    },
    {
        id: 'CUST-312-3',
        statusId: 3,
        date: 1692008533,
        deliveryTime: 1795119533,
        cardNum: '4568 9069',
        email: 'giafly@hotmail.com',
        initials: 'Павел Андреевич',
        phone: '+79987352563',
        address: 'Михайловск, Гоголя 16, кв. 52',
        ordersCount: 2,
        person: 1,
        sum: 12253,
        comment: 'Когда приедите, позвоните, я выйду',
    },
]

export const columnHelper = createColumnHelper<Client>()
export const ClientsColumns = [

    columnHelper.accessor('id', {
        header: () => '#',
        cell: info => <Checkbox id={`${info.getValue()}`}/>
    }),
    columnHelper.accessor('id', {
        header: () => 'ID',
        cell: info => <Link to={`/manual/clients/${info.getValue()}`}>{info.getValue()}</Link>,
    }),
    columnHelper.accessor('date', {
        header: () => 'Последний заказ',
        cell: info => moment(info.renderValue()).lang('ru').format('DD MMMM - HH.mm'),
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
    columnHelper.accessor('sum', {
        header: 'Сумма заказов',
        cell: sum => sum.renderValue().toLocaleString('ru') + ' ₽'
    }),
    columnHelper.accessor('comment', {
        header: 'Комментарий',
    }),
]