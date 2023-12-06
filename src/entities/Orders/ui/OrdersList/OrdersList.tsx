import { Table } from 'shared/ui/Table/Table';
import { OrdersListData, OrdersListColumns } from 'entities/Orders';
import { FormProvider, useForm } from 'react-hook-form';

export const OrdersList = () => {
    const formMethods = useForm();
    const { handleSubmit } = formMethods;
    const onSubmit = () => console.log('qwe');

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Table
                    formMethods={formMethods}
                    data={OrdersListData}
                    columns={OrdersListColumns}
                />
            </form>
        </FormProvider>
    );
};
