import cls from './TariffsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { Tarifs } from 'features/Tarifs/ui/Tarifs';

export const TariffsPage = () => {

    return (
        <div className={classNames(cls.tariffsPage, {}, [])}>
            <TopBar title={'Тарифы'} />
            <ContentLayout>
                <Tarifs />
            </ContentLayout>
        </div>
    )
}
