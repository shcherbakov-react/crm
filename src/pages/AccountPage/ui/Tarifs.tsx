import cls from './AccountPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const Tarifs = () => {
    return (
        <div className={cls.tarifs}>
            <h3 className={classNames('', {}, ['h2'])}>Тарифы и оплата</h3>
            <div className={cls.tarifBlock}>
                <div className={cls.placeholder}>

                </div>
                <div className={cls.info}>
                    <p>Вы используете демо-режим системы Миркат-Еда. В течение 14 дней вы можете пользоваться тестовым
                        функционалом.</p>
                    <p>После истечения срока, чтобы продолжить пользоваться системой перейдите на один из тарифов.</p>
                    <Button className={cls.btn} theme={ThemeButton.CLEAR}>Получить консультацию</Button>
                </div>
            </div>
        </div>
    )
}