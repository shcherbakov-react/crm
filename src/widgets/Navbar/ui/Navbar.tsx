import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {useState} from 'react';
import moment from 'moment';
// @ts-ignore
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [date, setDate] = useState(new Date());
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
                <div>login_name</div>
            </div>
        </div>
    );
};
