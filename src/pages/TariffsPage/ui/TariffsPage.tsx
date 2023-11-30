import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { Tariffs } from 'features/Tariffs/ui/Tariffs';
import cls from './TariffsPage.module.scss';

export const TariffsPage = () => {
    return (
        <div className={classNames(cls.tariffsPage, {}, [])}>
            <TopBar title="Тарифы" />
            <ContentLayout>
                <Tariffs />
            </ContentLayout>
        </div>
    );
};
