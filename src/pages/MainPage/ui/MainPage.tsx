import React from 'react';
import {useTranslation} from 'react-i18next';
import {TopBar} from 'widgets/TopBar/ui/TopBar';
import {ContentLayout} from 'widgets/ContentLayout/ContentLayout';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <TopBar title={t('Главная страница')}/>
            <ContentLayout>
                <TextField/>
            </ContentLayout>
        </>
    );
};

export default MainPage;
