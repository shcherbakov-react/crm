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

                <div className={cls.calendar}>
                    <div className={cls.calendarGrid}>
                        <div className={cls.tableTitle}>
                            Торговые точки
                            <span className={cls.tableCount}>4</span>
                        </div>
                        {daysMap.map((dayItem) => (
                            <div key={dayItem.format('DDMM:hhss')} className={cls.calendarCell}>
                                <div className={cls.calendarCell__day}>{dayItem.format('D MMMM')}</div>
                                <div className={cls.calendarCell__weekday}>{dayItem.format('ddd')}</div>
                            </div>
                        ))}
                    </div>
                    <div className={cls.tableAction}>
                        <div>Выбрать</div>
                        <div className={cls.btnGroup}>
                            <Button theme={ThemeButton.SM} onClick={prevHandler}>Предыдущая</Button>
                            <Button theme={ThemeButton.SM} onClick={nextHandler}>Следующая</Button>
                        </div>
                    </div>
                    <div className={cls.calendarList}>
                        <div className={cls.calendarGrid}>
                            <div className={cls.tableTochka}>
                                <div className={cls.tableTochkaName}>{('Сушитайм').slice(0, 2).toUpperCase()}</div>
                                <div className={cls.tableName}>Михайловск</div>
                                <span className={cls.tableAddress}>ул. Ишкова, д. 149</span>
                            </div>
                            {daysMap.map((dayItem) => (
                                <div
                                    key={dayItem.format('DDMM:hhss')}
                                    className={cls.calendarCell}>
                                    <div className={cls.aclendarCell__day}>
                                        <div className={cls.basicInfo}>
                                            <div className={cls.calendarCell__title}>Стандарт</div>
                                            <div className={cls.time}>10:00 - 22:00</div>
                                        </div>
                                        <div className={cls.personalList}>
                                            <div className={cls.personalItem}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.59003 7.64819C1.96125 8.01675 0.312606 8.7693 1.31674 9.711C1.80725 10.171 2.35355 10.5 3.04039 10.5H6.95961C7.64645 10.5 8.19275 10.171 8.68326 9.711C9.68739 8.7693 8.03875 8.01675 7.40997 7.64819C5.93547 6.78394 4.06453 6.78394 2.59003 7.64819Z"
                                                        stroke="#667085" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M7 3.5C7 4.60457 6.10457 5.5 5 5.5C3.89543 5.5 3 4.60457 3 3.5C3 2.39543 3.89543 1.5 5 1.5C6.10457 1.5 7 2.39543 7 3.5Z"
                                                        stroke="#667085" />
                                                    <path
                                                        d="M9.75915 1.71663L10.0231 2.24893C10.0591 2.32303 10.1551 2.39411 10.2361 2.40772L10.7145 2.48786C11.0205 2.53928 11.0925 2.76309 10.872 2.98387L10.5001 3.35891C10.4371 3.42242 10.4026 3.54491 10.4221 3.63262L10.5286 4.09687C10.6126 4.46435 10.4191 4.6065 10.0966 4.41444L9.64816 4.14678C9.56717 4.09839 9.43368 4.09839 9.35119 4.14678L8.90274 4.41444C8.58178 4.6065 8.3868 4.46283 8.47079 4.09687L8.57728 3.63262C8.59677 3.54491 8.56228 3.42242 8.49928 3.35891L8.12733 2.98387C7.90835 2.76309 7.97884 2.53928 8.28481 2.48786L8.76326 2.40772C8.84275 2.39411 8.93874 2.32303 8.97473 2.24893L9.2387 1.71663C9.38269 1.42779 9.61666 1.42779 9.75915 1.71663Z"
                                                        stroke="#667085" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                <div>1/1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cls.calendarGrid}>
                            <div className={cls.tableTochka}>
                                <div className={cls.tableTochkaName}>{('Ставрополь').slice(0, 2).toUpperCase()}</div>
                                <div className={cls.tableName}>Ставрополь</div>
                                <span className={cls.tableAddress}>ул. Ишкова, д. 149</span>
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
                </div>
            </ContentLayout>
        </>
    );
}
