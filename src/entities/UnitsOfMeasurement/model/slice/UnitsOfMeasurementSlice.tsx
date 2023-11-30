import { createColumnHelper } from '@tanstack/react-table';
import { UnitsOfMeasurementSchema } from 'entities/UnitsOfMeasurement/model/types/UnitsOfMeasurementSchema';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

export const UnitsOfMeasurementData: UnitsOfMeasurementSchema[] = [
    {
        id: 'UOM-0-001',
        name: 'Грамм',
        shortName: 'г',
        intName: 'g',
        code: 154,
        isBase: true,
    },
    {
        id: 'UOM-0-002',
        name: 'Килограмм',
        shortName: 'кг',
        intName: 'kg',
        code: 156,
        isBase: false,
    },
    {
        id: 'UOM-0-003',
        name: 'Литр',
        shortName: 'л',
        intName: 'l',
        code: 112,
        isBase: true,
    },
    {
        id: 'UOM-0-004',
        name: 'Упаковка',
        shortName: 'упак',
        intName: 'nmp',
        code: 778,
        isBase: false,
    },
    {
        id: 'UOM-0-005',
        name: 'Бутылка',
        shortName: 'бут',
        intName: 'bot',
        code: 886,
        isBase: false,
    },
    {
        id: 'UOM-0-006',
        name: 'Штука',
        shortName: 'шт',
        intName: 'pc',
        code: 796,
        isBase: true,
    },
];

export const columnHelper = createColumnHelper<UnitsOfMeasurementSchema>();
export const UnitsOfMeasurementColumns = [
    columnHelper.accessor('id', {
        header: () => '#',
        cell: (info) => <Checkbox id={info.getValue()} />,
    }),
    columnHelper.accessor('shortName', {
        header: () => 'Короткое название',
    }),
    columnHelper.accessor('intName', {
        header: 'Международное название',
    }),
    columnHelper.accessor('code', {
        header: 'Код',
    }),
    columnHelper.accessor('isBase', {
        header: 'Базовая единица',

    }),
];
