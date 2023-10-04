import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeSwitcher = () => {

    const colors = [
        {
            name: 'LIGHT',
            color: '#232323',
        }
    ]

    return (
        <div className={classNames(cls.themeSwitcher, {}, [])}>
            <div>Цвет интерфейса</div>
            <div className={cls.themeList}>
                {colors.map((item) => (
                    <div style={{background: `${item.color}`}} className={cls.themeItem}></div>
                ))}
            </div>
        </div>
    )
}