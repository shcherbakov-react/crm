import cls from './ReportPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';
import { Tariffs } from 'features/Tariffs/ui/Tariffs';

interface ReportPageProps {
    className?: string;
}

export const ReportPage = (props: ReportPageProps) => {
    const { className } = props;

    return (
        <>
            <TopBar title="Отчеты" />
            <ContentLayout>
                <div>Репорты</div>
            </ContentLayout>
        </>
    );
};
