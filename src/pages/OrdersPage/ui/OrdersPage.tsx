import * as React from 'react'
import cls from './OrdersPage.module.scss'
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { TableAction } from 'pages/OrdersPage/ui/TableAction/TableAction';
import { Map } from 'pages/OrdersPage/ui/Map/Map';
import { columns, defaultData } from './Columns';
import { FormProvider, useForm } from 'react-hook-form';


export const OrdersPage = () => {
    const [data, setData] = React.useState(() => [...defaultData])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const formMethods = useForm();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = formMethods;

    const printCheck = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Map />
            <FormProvider {...formMethods}>
                <TableAction submit={handleSubmit(printCheck)} />
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
            </FormProvider>
        </div>
    )
}
