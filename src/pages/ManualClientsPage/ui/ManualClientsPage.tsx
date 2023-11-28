import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { ClientsList } from 'entities/Clients';
import { Link } from 'react-router-dom';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const ManualClientsPage = () => {
    const formMethods = useForm();
    return (
        <>
            <TopBar title="Клиенты" />
            <ContentLayout>
                <FormProvider {...formMethods}>
                    <Button theme={ThemeButton.CLEAR}>
                        <Link to="/clients/add">Добавить пользователя</Link>
                    </Button>
                    <ClientsList />
                </FormProvider>
            </ContentLayout>
        </>
    );
};
