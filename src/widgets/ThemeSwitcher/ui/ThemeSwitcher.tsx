import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/icons/theme.svg'
import { useState } from 'react';
import axios from 'axios';

export const ThemeSwitcher = () => {

    axios('https://api.opendota.com/api/rankings', {
        method: 'get'
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    const [isActive, setIsActive] = useState<boolean>(false);
    const colors = [
        {
            name: 'LIGHT',
            color: '#232323',
        },
        {
            name: 'PURPLE',
            color: '#7F56D9',
        }
    ]

    return (
        <div className={classNames(cls.themeSwitcher, {}, [])}>
            <div className={cls.themeName} onClick={() => setIsActive(!isActive)}>
                <ThemeIcon />
                Цвет интерфейса
            </div>
            <div className={classNames(cls.themeList, { [cls.active]: isActive }, [])}>
                {colors.map((item) => (
                    <div key={item.color} style={{ background: `${item.color}` }} className={cls.themeItem}></div>
                ))}
            </div>
        </div>
    )
}