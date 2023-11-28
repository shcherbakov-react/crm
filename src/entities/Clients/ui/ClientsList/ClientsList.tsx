import { Table } from 'shared/ui/Table/Table';
import { ClientsListColumns, ClientsListData } from '../../model/slice/ClientsSlice';

export const ClientsList = () => (
    <Table data={ClientsListData} columns={ClientsListColumns} />
);
