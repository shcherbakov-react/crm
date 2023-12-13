import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { BlockLayout } from 'shared/ui/BlockLayout/BlockLayout';
import cls from './Tariffs.module.scss';

export const Tariffs = () => {
    const num = 5000;
    return (
        <div className={classNames(cls.TariffsList, {}, [])}>
            {Array(4)
                .fill(4)
                .map(() => (
                    <BlockLayout>
                        <div className={cls.tariffItem}>
                            <div
                                className={classNames(cls.tariffTitle, {}, [
                                    'h2',
                                ])}
                            >
                                Начальный
                            </div>
                            <div
                                className={classNames(cls.subtitle, {}, ['h2'])}
                            >
                                Система доставки для небольших кафе
                            </div>
                            <div className={cls.tariffName}>
                                Тариф стандартный +
                            </div>
                            <ul className={cls.tariffUl}>
                                <li className={cls.tariffLi}>
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.999999 4.18182L3.30361 7.11368C3.67401 7.5851 4.3731 7.6269 4.79703 7.20297L11 1" stroke="#5F586A" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>

                                    Персонал и учет смен
                                </li>
                                <li className={cls.tariffLi}>
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.999999 4.18182L3.30361 7.11368C3.67401 7.5851 4.3731 7.6269 4.79703 7.20297L11 1" stroke="#5F586A" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>

                                    Склад и остатки
                                </li>
                                <li className={cls.tariffLi}>
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.999999 4.18182L3.30361 7.11368C3.67401 7.5851 4.3731 7.6269 4.79703 7.20297L11 1" stroke="#5F586A" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>

                                    Заказы
                                </li>
                                <li className={cls.tariffLi}>
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.999999 4.18182L3.30361 7.11368C3.67401 7.5851 4.3731 7.6269 4.79703 7.20297L11 1" stroke="#5F586A" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    Управление доставкой
                                </li>
                            </ul>
                            <div className={cls.Price}>
                                {num.toLocaleString('ru-RU')}₽
                            </div>
                            <Button theme={ThemeButton.CLEAR}>Перейти</Button>
                        </div>
                    </BlockLayout>
                ))}
        </div>
    );
};
