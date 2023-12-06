import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import Plus from 'shared/assets/icons/plus.svg';
import cls from './Button.module.scss';

export enum ThemeButton {
    ADD = 'add',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    MORE = 'more',
    SM = 'small',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    width?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, width, children, theme, type, ...otherProps
    } = props;

    return (
        <button
            type="submit"
            className={classNames(cls.Button, { [cls[theme]]: true }, [
                className,
            ])}
            style={{ width: `${width}` }}
            {...otherProps}
        >
            {theme === 'add' && <Plus />}
            {children}
        </button>
    );
};
