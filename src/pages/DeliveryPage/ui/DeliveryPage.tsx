
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { DeliveryMap } from 'features/DeliveryMap/ui/DeliveryMap';

export const DeliveryPage = () => {
    return (
        <>
            <TopBar title={'Доставка'}/>
            <ContentLayout>
                <DeliveryMap />
            </ContentLayout>
        </>
    )
}