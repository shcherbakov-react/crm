import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const exit = () => {
        console.log('exit');
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.widgets}>
                <div className={cls.tariffWrapper}>
                    <div className={cls.tariffTitle}>Демо-режим</div>
                    <div className={cls.tariffDescr}>Осталось 11 дней</div>
                </div>
                <Link to="account/tariffs">
                    <Button theme={ThemeButton.SM}>
                        Выбрать тариф
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </Button>
                </Link>
                <div className={cls.notification}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.91855 11.5637C5.85324 12.7603 5.92832 14.034 4.81967 14.8358C4.30368 15.2089 4 15.7946 4 16.4166C4 17.2721 4.69493 18 5.6 18H18.4C19.3051 18 20 17.2721 20 16.4166C20 15.7946 19.6963 15.2089 19.1803 14.8358C18.0717 14.034 18.1468 12.7603 18.0815 11.5637C17.9112 8.44477 15.239 6 12 6C8.76104 6 6.08878 8.44476 5.91855 11.5637Z"
                            stroke="#5F586A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 3.5C10 4.60457 10.8954 6 12 6C13.1046 6 14 4.60457 14 3.5C14 2.39543 13.1046 2 12 2C10.8954 2 10 2.39543 10 3.5Z"
                            stroke="#5F586A"
                            strokeWidth="2"
                        />
                        <path
                            d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19"
                            stroke="#5F586A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className={cls.notificationCounter}>
                        <span>5</span>
                    </div>
                </div>
                <Dropdown
                    items={[
                        {
                            content: 'Админка',
                            href: '/admin',
                        },
                        {
                            content: 'Тарифы',
                            href: 'account/tariffs',
                        },
                        {
                            content: 'Настройки',
                            href: '/settings',
                        },
                        {
                            content: 'Выйти',
                            onClick: exit,
                        },
                    ]}
                    direction="bottom left"
                    trigger={<Avatar size={40} />}
                />
            </div>
        </div>
    );
};
