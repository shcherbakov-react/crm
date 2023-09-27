import cls from './ClientsTable.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import { Table } from 'shared/ui/Table/Table';
import { columns, defaultData } from 'pages/OrdersPage/api/GetOrders';

interface ClientsTableProps {
    className?: string;
}

export const ClientsTable = (props: ClientsTableProps) => {
const {
    className,
} = props;

    return (
        <Table  data={defaultData} columns={columns} />
    )
}