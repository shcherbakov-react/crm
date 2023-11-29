import { createColumnHelper } from '@tanstack/react-table';
import { getStatusCode } from 'entities/Deliveries';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { AddressSchema } from '../types/AddressListSchema';

export const AddressListData: AddressSchema[] = [
    {
        id: 'ZN-312-001',
        name: 'Сушитайм',
        status: 1,
        minSum: 350,
        minFreeDelivery: 500,
        deliveryTime: 90,
        deliveryRadius: '500 м',
        comment: '',
    },
    {
        id: 'ZN-312-002',
        name: 'Гармония',
        status: 1,
        minSum: 400,
        minFreeDelivery: 500,
        deliveryTime: 40,
        deliveryRadius: '2 км',
        comment: 'Постоянно пробки с 11 до 15',
    },
    {
        id: 'ZN-312-003',
        name: 'Выставка Михайловск',
        status: 1,
        minSum: 400,
        minFreeDelivery: 500,
        deliveryTime: 40,
        deliveryRadius: '500 м',
        comment: '',
    },
    {
        id: 'ZN-312-004',
        name: 'СНИСХ  Михайловск',
        status: 0,
        minSum: 400,
        minFreeDelivery: 500,
        deliveryTime: 40,
        deliveryRadius: '1 км',
        comment: '',
    },
    {
        id: 'ZN-312-005',
        name: 'Югозапад',
        status: 1,
        minSum: 400,
        minFreeDelivery: 500,
        deliveryTime: 40,
        deliveryRadius: '800 м',
        comment: '',
    },
];

export const columnHelper = createColumnHelper<AddressSchema>();
export const AddressListColumns = [
    columnHelper.accessor('id', {
        header: () => '#',
        cell: (info) => <Checkbox id={info.getValue()} />,
    }),
    columnHelper.accessor('id', {
        header: 'ID',
    }),
    columnHelper.accessor('name', {
        header: 'Название',
    }),
    columnHelper.accessor('status', {
        header: () => 'Статус',
        cell: (status) => getStatusCode(status.renderValue()),
    }),
    columnHelper.accessor('minSum', {
        header: 'Min ₽ заказа',
    }),
    columnHelper.accessor('minFreeDelivery', {
        header: 'Min ₽ бесп. доставки',
    }),
    columnHelper.accessor('deliveryTime', {
        header: 'Время доставки (мин)',
    }),
    columnHelper.accessor('deliveryRadius', {
        header: 'Радиус доставки',
    }),
    columnHelper.accessor('comment', {
        header: 'Комментарий',
    }),
];
