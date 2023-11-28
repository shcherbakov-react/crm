import cls from './UsersPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { columns, defaultDataUsers } from 'pages/UsersPage/ui/Columns';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { Table } from 'shared/ui/Table/Table';
import { FormProvider, useForm } from 'react-hook-form';

export const UsersPage = () => {
    const [data, setData] = React.useState(() => [...defaultDataUsers]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    const formMethods = useForm();

    return (
        <>
            <TopBar title={'Пользователи'} />
            <ContentLayout>
                <div className={classNames(cls.usersPage, {}, [])}>
                    <FormProvider {...formMethods}>
                        <Table data={data} columns={columns} />
                    </FormProvider>
                </div>
            </ContentLayout>
        </>
    );
};
