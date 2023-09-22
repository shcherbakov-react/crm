import cls from './SchedulePage.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import moment from 'moment';
import { useState } from 'react';
import { TopBar } from 'widgets/TopBar/ui/TopBar';
import { ContentLayout } from 'widgets/ContentLayout/ContentLayout';


export const SchedulePage = () => {
    moment.locale('ru');
    const [today, setToday] = useState(moment());
    const startDay = today.clone().startOf('week');
    const nextHandler = () => setToday((next) => next.clone().add(1, 'week'));
    const prevHandler = () => setToday((prev) => prev.clone().subtract(1, 'week'));
    const day = startDay.clone().subtract(1, 'day');
    const daysMap = [...Array(7)].map(() => day.add(1, 'day').clone());

    return (
        <>
            <TopBar title={'Заказы'} />
            <ContentLayout>
                <div className={cls.btnGroup}>
                    <Button theme={ThemeButton.CLEAR} onClick={prevHandler}>Предыдущая</Button>
                    <Button theme={ThemeButton.CLEAR} onClick={nextHandler}>Следующая</Button>
                </div>
                <div className={cls.calendar}>
                    <div className={cls.calendarGrid}>
                        <div className={cls.tableTitle}>
                            Торговые точки
                            <span className={cls.tableCount}>4</span>
                        </div>
                        {daysMap.map((dayItem) => (
                            <div
                                key={dayItem.format('DDMM:hhss')}
                                className={cls.calendarCell}>
                                <div className={cls.calendarCell__day}>{dayItem.format('D MMMM')}</div>
                                <div className={cls.calendarCell__weekday}>{dayItem.format('ddd')}</div>
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
                                className={cls.calendarCell}>
                                <div className={cls.calendarCell__day}>Стандарт</div>
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
                                className={cls.calendarCell}>
                                <div className={cls.calendarCell__day}>
                                    <div>Стандарт</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentLayout>
        </>
    );
}
