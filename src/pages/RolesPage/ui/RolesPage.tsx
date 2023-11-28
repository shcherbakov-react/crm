import { classNames } from 'shared/lib/classNames/classNames';
import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { Table } from 'shared/ui/Table/Table';
import cls from './RolesPage.module.scss';

export const RolesPage = () => {
    const formMethods = useForm();
    return (
        <>
            <TopBar title="Роли" />
            <div className={classNames(cls.rolesPage, {}, ['content'])}>
                <FormProvider {...formMethods}>
                    {/*<Table columns={columns} data={defaultData} />*/}
                </FormProvider>
            </div>
        </>
    );
};
