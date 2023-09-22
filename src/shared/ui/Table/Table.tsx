import cls from './Table.module.scss'
import { FC } from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface TableProps {
    data: any[];
    columns: ColumnDef<any>[];
}

export const Table: FC<TableProps> = ({ data, columns }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className={cls.table}>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr className={cls.header} key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th className={cls.cell} key={header.index}>
                            {
                                header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )
                            }
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                <tr className={cls.row} key={row.id}>
                    {row.getVisibleCells().map((cell, index) => (
                        <td className={cls.cell} key={cell.id + index}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}
