import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { ClientsList } from 'entities/Clients';

export const ManualClientsPage = () => {
    const formMethods = useForm();
    return (
        <>
            <TopBar title="Клиенты" />
            <ContentLayout>
                <FormProvider {...formMethods}>
                    <ClientsList />
                </FormProvider>
            </ContentLayout>
        </>
    );
};
