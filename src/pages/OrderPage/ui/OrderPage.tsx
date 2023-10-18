import {FC} from 'react';
import {TopBar} from 'widgets/TopBar/ui/TopBar';
import {ContentLayout} from 'widgets/ContentLayout/ContentLayout';
import {useParams} from "react-router-dom";

interface IOrderPage {

}

export const OrderPage: FC<IOrderPage> = ({}) => {
    let {id} = useParams()
    return (
        <>
            <TopBar title={`Заказ: ${id}`}/>
            <ContentLayout>
                <div>Заказик</div>
            </ContentLayout>
        </>
    )
}
