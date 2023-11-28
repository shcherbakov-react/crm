import { AddressList } from 'entities/Deliveries';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'pages/MarketingPage/ui/MarketingPage.module.scss';
import { FormProvider, useForm } from 'react-hook-form';

export const ManualsAddressPage = () => {
    const formMethods = useForm();
    return (
        <>
            <TopBar title="Адреса и зоны" />
            <ContentLayout>
                <div className={classNames(cls.marketing, {}, [])}>
                    <FormProvider {...formMethods}>
                        <AddressList />
                    </FormProvider>
                </div>
            </ContentLayout>
        </>
    );
};
