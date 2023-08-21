import cls from './AccountPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Input, TypeInput } from 'shared/ui/Input/Input';
import { LegalPerson } from 'pages/AccountPage/ui/LegalPerson';
import { BaseSetting } from 'pages/AccountPage/ui/BaseSetting';

interface AccountPageProps {
    className?: string;
}

export const AccountPage = (props: AccountPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.AccountPage, {}, [className])}>
            <div className={cls.info}>
                <BaseSetting />
                <LegalPerson />
            </div>
        </div>
    )
}