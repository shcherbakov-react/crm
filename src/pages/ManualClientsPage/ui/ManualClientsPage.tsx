import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { ClientsTable } from 'entities/Clients';

export const ManualClientsPage = () => {
    const formMethods = useForm();
    const {
        handleSubmit,
    } = formMethods;

    return (
        <>
            <TopBar title="Клиенты" />
            <ContentLayout>
                <FormProvider {...formMethods}>
                    <ClientsTable />
                </FormProvider>
            </ContentLayout>
        </>
    );
};
