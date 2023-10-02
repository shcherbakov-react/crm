import cls from './DeliveryPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { useState } from 'react';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { DeliveryMap } from 'features/DeliveryMap/ui/DeliveryMap';

export const DeliveryPage = () => {

    const [open, setOpen] = useState(false)

    const items = [
        { content: 'first', onClick: () => setOpen(true) },
        { content: 'second' },
        { content: 'third' },
    ]

    return (
        <>
            <TopBar title={'Доставка'}/>
            <ContentLayout>
                <DeliveryMap></DeliveryMap>
            </ContentLayout>
        </>
    )
}