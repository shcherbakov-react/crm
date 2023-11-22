import { FC } from 'react';
import cls from './StatusBar.module.scss';

interface IStatusBar {
    activeStatusId: number;
}

export const StatusBar: FC<IStatusBar> = ({ activeStatusId }: IStatusBar) => {
    return (
        <div className={cls.statusBar}>
            <div className={cls.statusBarElem}>
                <div className={cls.status}>
                    <span className={cls.point} />
                    Новый
                </div>
                <div className={cls.status}>
                    <span className={cls.point} />
                    Приготовление
                </div>
                <div className={cls.status}>
                    <span className={cls.point} />
                    Собирается
                </div>
                <div className={cls.status}>
                    <span className={cls.point} />
                    Доставояется
                </div>
                <div className={cls.status}>
                    <span className={cls.point} />
                    Завершен
                </div>
                <div className={cls.line} />
            </div>
        </div>
    );
};
