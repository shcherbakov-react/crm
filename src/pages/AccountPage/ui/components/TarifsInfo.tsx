import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from '../AccountPage.module.scss';

export const TariffsInfo = () => {
    return (
        <div className={classNames(cls.tariffs, {}, ['block'])}>
            <h3 className={classNames('', {}, ['h2'])}>Ваш тарифный план</h3>
            <div className={cls.tariffBlock}>
                <div className={cls.placeholder} />
                <div className={cls.tariffsInfo}>
                    <p>
                        Вы используете демо-режим системы Миркат-Еда. В течение
                        14 дней вы можете пользоваться тестовым функционалом.
                    </p>
                    <p>
                        После истечения срока, чтобы продолжить пользоваться
                        системой перейдите на один из тарифов.
                    </p>
                    <Button className={cls.btn} theme={ThemeButton.CLEAR}>
                        Получить консультацию
                    </Button>
                </div>
            </div>
        </div>
    );
};
