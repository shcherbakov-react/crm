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
            <div>
                <div className={cls.datatime}>
                    <div className={`${cls.time} d-flex d-flex justify-content-center`}>
                        {moment(date).format('HH:mm')}
                    </div>
                    <div className={`${cls.date} date`}>
                        {moment(date).lang('ru').format('dddd, DD MMMM')}
                    </div>
                </div>
            </div>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink to="/about">
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
