import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import Plus from 'shared/assets/icons/plus.svg';

export enum ThemeButton {
    ADD = 'add',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    MORE = 'more',
    SM = 'small'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        type,
        ...otherProps
    } = props;

    return (
        <button
            type="submit"
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {theme === 'add' && <Plus />}
            {children}
        </button>
    );
};
