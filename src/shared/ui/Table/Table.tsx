import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { UseFormReturn } from 'react-hook-form';
import cls from './Table.module.scss';

interface TableProps<T extends { id: string }> {
    data: Array<T>;
    columns: ColumnDef<T>[];
    formMethods?: UseFormReturn;
}

export const Table = <T extends { id: string }>({
    data,
    formMethods,
    columns,
}: TableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className={cls.tableWrapper}>
            <table className={cls.table}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr className={cls.header} key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    className={cls.cell}
                                    key={header.id + header.index}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr className={cls.row} key={row.id + row.index}>
                            {row.getVisibleCells().map((cell, index) => (
                                <td className={cls.cell} key={cell.id + index}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
