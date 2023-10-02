import cls from './UsersPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import * as React from 'react';
import { columns, defaultDataUsers } from 'pages/UsersPage/ui/Columns';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { Table } from 'shared/ui/Table/Table';

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
                    <Table data={data} columns={columns} />
                </div>
            </ContentLayout>
        </>
    )
}