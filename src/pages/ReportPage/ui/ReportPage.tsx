import cls from './ReportPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';

interface ReportPageProps {
    className?: string;
}

export const ReportPage = (props: ReportPageProps) => {
    const {
        className,
    } = props;

    return (
        <>
            <TopBar title={'Отчеты'} />
            <div className={classNames(cls.reportPage, {}, ['content'])}>
                Reports
            </div>
        </>
    )
}