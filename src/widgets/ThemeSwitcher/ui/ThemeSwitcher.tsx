import { classNames } from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { useState } from 'react';
import axios from 'axios';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
    axios('https://api.opendota.com/api/rankings', {
        method: 'get',
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    const [isActive, setIsActive] = useState<boolean>(false);
    const colors = [
        {
            name: 'LIGHT',
            ruName: 'Светлый',
            color: '#232323',
            active: false,
        },
        {
            name: 'PURPLE',
            ruName: 'Фиолетовый',
            color: '#7F56D9',
            active: true,
        },
    ];

    const activeElem = colors.find((item) => item.active === true);

    return (
        <div className={classNames(cls.themeSwitcher, {}, [])}>
            <div
                className={cls.themeName}
                onClick={() => setIsActive(!isActive)}
            >
                <div style={{ backgroundColor: `${activeElem.color}` }} className={cls.iconColor} />
                <div>{activeElem.ruName}</div>
                <div className={cls.themeLabel}>Цвет интерфейса</div>
            </div>
            <div
                className={classNames(
                    cls.themeList,
                    { [cls.active]: isActive },
                    [],
                )}
            >
                {colors.map((item) => (
                    <div
                        key={item.color}
                        style={{ background: `${item.color}` }}
                        className={cls.themeItem}
                    />
                ))}
            </div>
        </div>
    );
};
