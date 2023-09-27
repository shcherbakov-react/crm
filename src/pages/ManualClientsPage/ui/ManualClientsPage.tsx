import cls from './ManualClientsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ClientsTable } from 'entities/Clients';
import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';

export const ManualClientsPage = () => {


    const formMethods = useForm();
    const {
        handleSubmit,
    } = formMethods;

    return (
        <>
            <TopBar title={'Клиенты'} />
            <ContentLayout>
                <FormProvider {...formMethods}>
                    <ClientsTable />
                </FormProvider>
            </ContentLayout>
        </>
    )
}