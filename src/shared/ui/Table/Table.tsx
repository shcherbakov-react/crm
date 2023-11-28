import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import cls from './Table.module.scss';

interface TableProps<T extends {id: string}> {
    data: Array<T>;
    columns: ColumnDef<T>[];
}

export const Table = <T extends {id: string}>({ data, columns }: TableProps<T>) => {
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
    );
};
