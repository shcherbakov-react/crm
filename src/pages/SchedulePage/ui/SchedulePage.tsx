import cls from './SchedulePage.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import moment from 'moment';
import { useState } from 'react';

interface SchedulePageProps {
    className?: string;
}

export const SchedulePage = (props: SchedulePageProps) => {
    const {
        className,
    } = props;


    moment.locale('ru');
    const [today, setToday] = useState(moment());
    const startDay = today.clone().startOf('week');

    const nextHandler = () => setToday((next) => next.clone().add(1, 'week'));
    const prevHandler = () => setToday((prev) => prev.clone().subtract(1, 'week'));
    const day = startDay.clone().subtract(1, 'day');
    const daysMap = [...Array(7)].map(() => day.add(1, 'day').clone());

    return (
        <>
            <Button theme={ThemeButton.CLEAR} onClick={prevHandler}>prev</Button>
            <Button theme={ThemeButton.CLEAR} onClick={nextHandler}>next</Button>
            <div className={cls.calendar}>
                <div className={cls.calendarGrid}>
                    <div className={cls.tableTitle}>
                        Торговые точки
                        <span className={cls.tableCount}>4</span>
                    </div>
                    {daysMap.map((dayItem) => (
                        <div
                            key={dayItem.format('DDMM:hhss')}
                            className={cls.calendarСell}>
                            <div className={cls.calendarСell__day}>{dayItem.format('D MMMM')}</div>
                        </div>
                    ))}
                </div>
                <div className={cls.calendarGrid}>
                    <div className={cls.tableTochka}>
                        <div>Сушитайм</div>
                        <span>ул. Ишкова, д. 149</span>
                    </div>
                    {daysMap.map((dayItem) => (
                        <div
                            key={dayItem.format('DDMM:hhss')}
                            className={cls.calendarСell}>
                            <div className={cls.calendarСell__day}>Стандарт</div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}