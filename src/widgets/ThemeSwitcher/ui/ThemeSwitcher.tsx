import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { useThemeContext } from 'app/providers/ThemeProvider/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localstorage';

export const ThemeSwitcher = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    console.log(isActive);
    const { toggleTheme } = useThemeContext();
    const colors = [
        {
            name: 'light',
            ruName: 'Светлый',
            color: '#fff',
        },
        {
            name: 'dark',
            ruName: 'Темный',
            color: '#000000',
        },
        {
            name: 'purple',
            ruName: 'Фиолетовый',
            color: '#7F56D9',
        },
        {
            name: 'blue',
            ruName: 'Синий',
            color: '#677bab',
        },
    ];
    const activeThemeName = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    const activeElem = colors.filter((item) => activeThemeName === item.name);
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
                    style={{ backgroundColor: `${activeElem[0].color}` }}
                    className={cls.iconColor}
                />
                <div className={cls.themeNameRu}>{activeElem[0].ruName}</div>
                <div className={cls.themeLabel}>Цвет интерфейса</div>
            </div>
            <div
                className={classNames(
                    cls.themeList,
                    { [cls.active]: isActive },
                    [],
                )}
            >
                {colors.map((item, index) => (
                    <div
                        key={item.color + index}
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
