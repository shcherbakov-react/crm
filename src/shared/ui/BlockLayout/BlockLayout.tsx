import { ReactNode } from 'react';
import cls from './BlockLayout.module.scss';

interface BlockLayoutProps {
    children: ReactNode
}

export const BlockLayout = ({ children }: BlockLayoutProps) => (
    <div className={cls.blockLayout}>
        {children}
    </div>
);
