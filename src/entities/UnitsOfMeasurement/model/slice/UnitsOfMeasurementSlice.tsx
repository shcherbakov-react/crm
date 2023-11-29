import Checkbox from '@mui/material/Checkbox';
import { createColumnHelper } from '@tanstack/react-table';
import { UnitsOfMeasurementSchema } from 'entities/UnitsOfMeasurement/model/types/UnitsOfMeasurementSchema';

export const UnitsOfMeasurementData: UnitsOfMeasurementSchema[] = [
    {
        id: 'UOM-0-001',
        name: 'Грамм',
        shortName: 'г',
        intName: 'g',
        code: 154,
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
