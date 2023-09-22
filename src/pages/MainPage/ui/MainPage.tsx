import React from 'react';
import { useTranslation } from 'react-i18next';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <TopBar title={t('Главная страница')} />
            <ContentLayout>
                qwe
            </ContentLayout>
        </>
    );
};

export default MainPage;
