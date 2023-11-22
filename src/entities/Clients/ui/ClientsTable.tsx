import { Table } from 'shared/ui/Table/Table';
import { ClientsColumns, GetClients } from 'pages/ManualClientsPage/api/GetClients';

export const ClientsTable = () => (
    <Table data={GetClients} columns={ClientsColumns} />
);
