import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './ContentLayout.module.scss';

interface ContentLayoutProps {
    children: ReactNode
}

export const ContentLayout = (props: ContentLayoutProps) => {
    const {
        children,
    } = props;

    return (
        <div className={classNames(cls.contentLayout, {}, [])}>
            {children}
        </div>
    );
};
