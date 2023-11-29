import { UnitsOfMeasurementList } from 'entities/UnitsOfMeasurement';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'pages/MarketingPage/ui/MarketingPage.module.scss';
import { FormProvider, useForm } from 'react-hook-form';

export const UnitsOfMeasurementPage = () => {
    const { ...formMethods } = useForm();
    return (
        <>
            <TopBar title="Единицы измерения" />
            <ContentLayout>
                <div className={classNames(cls.marketing, {}, [])}>
                    <FormProvider {...formMethods}>
                        <UnitsOfMeasurementList />
                    </FormProvider>
                </div>
            </ContentLayout>
        </>
    );
};
