import { Table } from 'shared/ui/Table/Table';
import {
    AddressListColumns,
    AddressListData,
} from 'entities/Deliveries';

export const AddressList = () => (
    <Table data={AddressListData} columns={AddressListColumns} />
);
