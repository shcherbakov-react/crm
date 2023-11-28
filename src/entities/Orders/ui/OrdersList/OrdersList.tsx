import { Table } from 'shared/ui/Table/Table';
import { OrdersListData, OrdersListColumns } from 'entities/Orders';

export const OrdersList = () => {
    return <Table data={OrdersListData} columns={OrdersListColumns} />;
};
