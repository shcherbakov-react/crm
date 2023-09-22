import cls from './UsersPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import * as React from 'react';
import { columns, defaultDataUsers } from 'pages/UsersPage/ui/Columns';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';

export const UsersPage = () => {

    const [data, setData] = React.useState(() => [...defaultDataUsers])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <>
            <TopBar title={'Пользователи'} />
            <ContentLayout>
                <div className={classNames(cls.usersPage, {}, [])}>
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
                            <rt className={cls.row} key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td className={cls.cell} key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </rt>
                        ))}
                        </tbody>
                    </table>
                </div>
            </ContentLayout>
        </>
    )
}