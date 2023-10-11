import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    activeClassName?: string;
}

export const
    AppLink: FC<AppLinkProps> = (props) => {
        const {
            to,
            className,
            children,
            activeClassName = '',
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props;

        return (
            <NavLink
                to={to}
                className={({ isActive }) =>
                    classNames(cls.AppLink, { [activeClassName]: isActive }, [
                        className,
                    ])
                }
                {...otherProps}
            >
                {children}
            </NavLink>
        );
    };
