import cls from './AccountingPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';

interface AccountingPageProps {
    className?: string
}

export const AccountingPage = (props: AccountingPageProps) => {
    const {
        className,
    } = props;

    return (
        <>
            <TopBar title={'Бухгалтерия'} />
            <ContentLayout>
                <div className={classNames(cls.accountingPage, {}, [className])}>
                    Бух
                </div>
            </ContentLayout>
        </>
    )

}