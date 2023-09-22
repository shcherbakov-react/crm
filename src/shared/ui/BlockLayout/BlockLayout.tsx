import cls from './BlockLayout.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';

interface BlockLayoutProps {
    children: ReactNode
}

export const BlockLayout = ({ children }: BlockLayoutProps) => {
    return (
        <div className={cls.blockLayout}>
            {children}
        </div>
    )
}