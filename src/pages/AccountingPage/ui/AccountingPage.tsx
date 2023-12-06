import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import cls from './AccountingPage.module.scss';

interface AccountingPageProps {
    className?: string;
}

export const AccountingPage = (props: AccountingPageProps) => {
    const { className } = props;

    return (
        <>
            <TopBar title="Бухгалтерия" />
            <ContentLayout>
                <div
                    className={classNames(cls.accountingPage, {}, [className])}
                >
                    Бух
                </div>
            </ContentLayout>
        </>
    );
};
