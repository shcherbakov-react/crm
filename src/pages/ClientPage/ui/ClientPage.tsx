import {TopBar} from 'widgets/TopBar/ui/TopBar';
import {ContentLayout} from 'widgets/ContentLayout/ContentLayout';
import { useParams} from 'react-router-dom';
import {Table} from 'shared/ui/Table/Table';
import {columns, defaultData} from "../../OrdersPage/api/GetOrders";
import {FormProvider, useForm} from 'react-hook-form';
import {ClientEditForm} from "features/ClientEditForm";

export const ClientPage = () => {
    let {clientId} = useParams()
    const {...formMethods} = useForm()
    return (
        <>
            <TopBar title={clientId !== 'add' ? `Клиент: ${clientId}` : 'Новый клиент'}/>
            <ContentLayout>
                <FormProvider {...formMethods}>
                    <ClientEditForm />
                    {clientId !== 'add' && <Table columns={columns} data={defaultData}/>}
                </FormProvider>
            </ContentLayout>
        </>
    )
}