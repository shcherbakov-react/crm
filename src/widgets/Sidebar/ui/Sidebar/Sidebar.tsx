import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import Logo from 'shared/assets/icons/logo.svg';
import cls from './Sidebar.module.scss';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string
}

const sidebarItemsList = useSidebarItems();

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.logo}>
                <Logo />
            </div>
            <div className={cls.menuList}>
                {sidebarItemsList.map((item, i) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path + ' ' + i}
                    />
                ))}
            </div>
        </div>
    );
};
