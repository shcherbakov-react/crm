import cls from './Table.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import * as React from 'react';
import { columns } from 'pages/OrdersPage/ui/Columns';
import { Person } from 'pages/OrdersPage/model/types/OrdersPageStatus';

// interface TableProps {
//     className?: string;
// }

type ColumnDefinitionType<T, K extends keyof T> = {
    key: K;
    header: string;
    width?: number;
}

type TableProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
}

export const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <table className={cls.table}>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr className={cls.header} key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th className={cls.cell} key={header.index}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                <tr className={cls.row} key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td className={cls.cell} key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}