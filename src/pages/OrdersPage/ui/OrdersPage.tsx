import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { OrdersList } from 'entities/Orders/ui/OrdersList/OrdersList';

export const OrdersPage = () => {
    const formMethods = useForm();
    const { handleSubmit } = formMethods;

    const printCheck = (data) => {
        console.log(data);
    };

    const items = [
        {
            title: 'Заказов',
            value: 12,
        },
        {
            title: 'Обработано',
            value: 5,
        },
    ];

    return (
        <>
            <TopBar title="Заказы" items={items} />
            <div className="content">
                <FormProvider {...formMethods}>
                    <OrdersList />
                </FormProvider>
            </div>
        </>
    );
};
