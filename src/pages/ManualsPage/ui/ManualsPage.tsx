import cls from './ManualsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { TopBar } from 'widgets/TopBar/ui/TopBar';

export const ManualsPage = () => {

    return (
        <>
            <TopBar title={'Справочники'} />
            <div className={classNames(cls.manualsPage, {}, ['content'])}>
                manuals
            </div>
        </>
    )
}