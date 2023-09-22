import cls from './ManualsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';

interface ManualsPageProps {
    className?: string;
}

export const ManualsPage = (props: ManualsPageProps) => {
    const {
        className,
    } = props;

    return (
        <>
            <TopBar title={'Справочники'} />
            <div className={classNames(cls.manualsPage, {}, ['content'])}>
                manuals
            </div>
        </>
    )
}