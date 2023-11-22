import { FC } from 'react';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { useParams } from 'react-router-dom';
import { Order } from 'entities/Orders/ui/OrderItem/Order';

export const OrderPage = () => {
    const { id } = useParams();
    return (
        <>
            <TopBar title={`Заказ: ${id}`} />
            <ContentLayout>
                <Order />
            </ContentLayout>
        </>
    );
};
