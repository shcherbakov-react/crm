import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import cls from './StoragePage.module.scss';

export const StoragePage = () => {
    return (
        <>
            <TopBar title="Склад" />
            <ContentLayout>
                <div>Склад</div>
            </ContentLayout>
        </>
    );
};
