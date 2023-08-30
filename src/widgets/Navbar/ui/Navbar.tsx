import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useState } from 'react';
import moment from 'moment';
import cls from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { AuthSchema } from 'feature/Session/Login/model/types/AuthSchema';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const date = new Date();
    const getCounter = (state: StateSchema) => state.auth;
    const userData = useSelector(getCounter)
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.info}>
                <div className={cls.title}>
                    Заказы
                </div>
                <div className={cls.infoItems}>
                    <div className={cls.item}>
                        Всего: 24
                    </div>
                    <div className={cls.item}>
                        Новых: 5
                    </div>
                    <div className={cls.item}>
                        Готовятся: 5
                    </div>
                    <div className={cls.item}>
                        На доставке: 5
                    </div>
                    <div className={cls.item}>
                        Доставлено: 5
                    </div>

                </div>
            </div>
            <div className={cls.widgets}>
                <div className={cls.datatime}>
                    <div className={`${cls.date}`}>
                        {moment(date).lang('ru').format('DD MMMM')}
                    </div>
                    <div className={`${cls.date}`}>
                        {moment(date).format('HH.mm')}
                    </div>
                </div>
                <div>{userData.login}</div>
            </div>
        </div>
    );
};
