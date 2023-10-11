import cls from './Tarifs.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const Tariffs = () => {

    const num = 5000;
    return (
        <div className={classNames(cls.TarifsList, {}, ['block'])}>
            {Array(4).fill(4).map(() => (
                <div className={cls.tariffItem}>
                    <div className={classNames(cls.tariffTitle, {}, ['h2'])}>
                        Начальный
                    </div>
                    <div className={classNames(cls.subtitle, {}, ['h2'])}>
                        Система доставки для небольших кафе
                    </div>
                    <div className={cls.tariffName}>
                        Тариф стандартный +
                    </div>
                    <ul className={cls.tariffUl}>
                        <li className={cls.tariffLi}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="12" height="12" rx="2" fill="#939393" />
                                <path d="M3 5.30769L5.1 8L9 3" stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                      strokeLinejoin="round" />
                            </svg>
                            Персонал и учет смен
                        </li>
                        <li className={cls.tariffLi}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="12" height="12" rx="2" fill="#939393" />
                                <path d="M3 5.30769L5.1 8L9 3" stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                      strokeLinejoin="round" />
                            </svg>
                            Склад и остатки
                        </li>
                        <li className={cls.tariffLi}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="12" height="12" rx="2" fill="#939393" />
                                <path d="M3 5.30769L5.1 8L9 3" stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                      strokeLinejoin="round" />
                            </svg>
                            Заказы
                        </li>
                        <li className={cls.tariffLi}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="12" height="12" rx="2" fill="#939393" />
                                <path d="M3 5.30769L5.1 8L9 3" stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                      strokeLinejoin="round" />
                            </svg>

                            Управление доставкой
                        </li>
                    </ul>
                    <Button theme={ThemeButton.MORE}>Подробное описание</Button>
                    <div className={cls.Price}>{num.toLocaleString('ru-RU')} ₽</div>
                    <Button theme={ThemeButton.CLEAR}>Перейти</Button>
                </div>
            ))}
        </div>
    )
}