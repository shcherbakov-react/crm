import { createColumnHelper } from '@tanstack/react-table';
import { getStatusCode } from 'entities/Deliveries';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { AddressSchema } from '../types/AddressListSchema';

export const AddressListData: AddressSchema[] = [
    {
        id: 'cqwe24112',
        name: 'Сушитайм',
        status: 1,
        minSum: 350,
        minFreeDelivery: 500,
        deliveryTime: 90,
        deliveryRadius: '500 м',
        comment: '',
    },
    {
        id: 'cqwe24113',
        name: 'Сушитайм',
        status: 1,
        minSum: 350,
        minFreeDelivery: 500,
        deliveryTime: 90,
        deliveryRadius: '500 м',
        comment: 'Постоянно пробки с 11 до 15',
    },
];

export const columnHelper = createColumnHelper<AddressSchema>();
export const AddressListColumns = [
    columnHelper.accessor('id', {
        header: () => '#',
        cell: (info) => <Checkbox id={info.getValue()} />,
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
