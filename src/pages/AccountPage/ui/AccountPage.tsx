import cls from './AccountPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { BaseSetting } from 'pages/AccountPage/ui/components/BaseSetting';
import { TarifsInfo } from './components/TarifsInfo';
import { BranchesList } from 'features/BranchesList';
import { FormProvider, useForm } from 'react-hook-form';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { BlockLayout } from 'shared/ui/BlockLayout/BlockLayout';

export const AccountPage = () => {
    const formMethods = useForm();
    const { handleSubmit } = formMethods;

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <TopBar title="Аккаунт" />
            <ContentLayout>
                <div className={classNames(cls.AccountPage, {}, [])}>
                    <div className={cls.info}>
                        <FormProvider {...formMethods}>
                            <form
                                className={cls.accountWrapper}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <BlockLayout>
                                    <BaseSetting />
                                </BlockLayout>
                                <TarifsInfo />
                                <BlockLayout>
                                    <BranchesList title="Юридическое лицо" />
                                </BlockLayout>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </ContentLayout>
        </>
    );
};
