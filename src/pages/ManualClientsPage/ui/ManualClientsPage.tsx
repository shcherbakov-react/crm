import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';

import {Table} from "shared/ui/Table/Table";
import {ClientsColumns, GetClients} from "pages/ManualClientsPage/api/GetClients";

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
                    <Table  data={GetClients} columns={ClientsColumns} />
                </FormProvider>
            </ContentLayout>
        </>
    )
}