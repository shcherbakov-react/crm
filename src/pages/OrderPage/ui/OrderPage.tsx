import cls from './OrderPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';

export const OrderPage = () => {
    let { id } = useParams()

    return (
        <div className={classNames(cls.orderPage, {}, [])}>
            <TopBar title={`Заказ №${id}`} />
            <ContentLayout>
                <div>qwe</div>
            </ContentLayout>
        </div>
    )
}