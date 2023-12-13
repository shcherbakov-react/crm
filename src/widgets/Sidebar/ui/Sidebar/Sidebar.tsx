import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import Logo from 'shared/assets/icons/logo-dark.svg';
import Icon from 'shared/assets/icons/sidebar.svg';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const sidebarItemsList = useSidebarItems();

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.logo}>
                <div
                    className={cls.iconHide}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <Icon className={cls.iconHide} />
                </div>
                <div className={cls.logoWrap}>
                    <Logo />
                </div>
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
});
