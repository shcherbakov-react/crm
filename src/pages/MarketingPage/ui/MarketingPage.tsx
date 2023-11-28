import cls from './MarketingPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';

interface MarketingProps {
    className?: string;
}

export const MarketingPage = (props: MarketingProps) => {
    const { className } = props;

    return (
        <>
            <TopBar title={'Маркетинг'} />
            <ContentLayout>
                <div className={classNames(cls.marketing, {}, [className])}>
                    Marketing
                </div>
            </ContentLayout>
        </>
    );
};
