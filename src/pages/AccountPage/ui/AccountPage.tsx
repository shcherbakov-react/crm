import cls from './AccountPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { BaseSetting } from 'pages/AccountPage/ui/BaseSetting';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Tarifs } from './Tarifs';
import { TarifsList } from 'pages/AccountPage/ui/TarifsList';
import { Extra } from 'pages/AccountPage/ui/Extra';
import { BranchesList } from 'feature/BranchesList';
import { FormProvider, useForm } from 'react-hook-form';

interface AccountPageProps {
    className?: string;
}

export const AccountPage = (props: AccountPageProps) => {
    const {
        className,
    } = props;

    const formMethods = useForm();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = formMethods;


    const onSubmit = (data) => {

    }

    return (
        <div className={classNames(cls.AccountPage, {}, [className])}>
            <div className={cls.info}>
                <FormProvider {...formMethods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <BaseSetting />
                        <BranchesList title="Юридическое лицо">
                            <Button theme={ThemeButton.ADD}>Добавить</Button>
                        </BranchesList>
                        <Tarifs />
                    </form>
                </FormProvider>
            </div>
            <TarifsList />
            <Extra />
        </div>
    )
}