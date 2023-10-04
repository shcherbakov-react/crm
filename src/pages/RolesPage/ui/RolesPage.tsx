import cls from './RolesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import * as React from 'react';
import { columns, defaultData } from 'pages/OrdersPage/api/GetOrders';
import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { Table } from 'shared/ui/Table/Table';
import { useState } from 'react';

export const RolesPage = () => {
    const formMethods = useForm();
    const [selectAll, setSelectAll] = useState<boolean>(true)
    console.log(selectAll)
    return (
        <>
            <TopBar title={'Роли'}></TopBar>
            <div className={classNames(cls.rolesPage, {}, ['content'])}>
                <FormProvider {...formMethods}>
                    <Table columns={columns} data={defaultData} />
                </FormProvider>
            </div>
        </>
    )
}
