import * as React from 'react'
import { TableAction } from 'pages/OrdersPage/ui/TableAction/TableAction';
import { Map } from 'features/DeliveryMap/ui/MapComponents/Map';
import { columns, defaultData } from '../api/GetOrders';
import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { Table } from 'shared/ui/Table/Table';

export const OrdersPage = () => {

    const formMethods = useForm();
    const {
        handleSubmit,
    } = formMethods;

    const printCheck = (data) => {
        console.log(data)
    }

    const items = [
        {
            title: 'Заказов',
            value: 12
        },
        {
            title: 'Обработано',
            value: 5
        }
    ]

    return (
        <>
            <TopBar title='Заказы' items={items} />
            <div className="content">
                <Map />
                <FormProvider {...formMethods}>
                    <TableAction submit={handleSubmit(printCheck)} />
                    <Table data={defaultData} columns={columns} />
                </FormProvider>
            </div>
        </>
    )
}
