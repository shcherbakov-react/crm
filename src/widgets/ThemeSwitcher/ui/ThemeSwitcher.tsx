import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useThemeContext } from 'app/providers/ThemeProvider/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { toggleTheme } = useThemeContext();
    const colors = [
        {
            name: 'light',
            ruName: 'Светлая',
            color: '#fff',
            active: false,
        },
        {
            name: 'dark',
            ruName: 'Темная',
            color: '#000000',
            active: false,
        },
        {
            name: 'purple',
            ruName: 'Фиолетовая',
            color: '#7F56D9',
            active: true,
        },
    ];

    const activeElem = colors.find((item) => item.active === true);
    const handleThemeChange = (selectedTheme: string) => {
        toggleTheme(selectedTheme as any); // TypeScript issue, need to cast to 'any'
    };
    return (
        <div className={classNames(cls.themeSwitcher, {}, [])}>
            <div
                className={cls.themeName}
                onClick={() => setIsActive(!isActive)}
            >
                <div
                    style={{ backgroundColor: `${activeElem.color}` }}
                    className={cls.iconColor}
                />
                <div className={cls.themeNameRu}>{activeElem.ruName}</div>
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
                        className={classNames(
                            cls.themeItem,
                            { [cls[item.name]]: true },
                            [],
                        )}
                        onClick={() => handleThemeChange(`${item.name}`)}
                    />
                ))}
            </div>
        </div>
    );
};
