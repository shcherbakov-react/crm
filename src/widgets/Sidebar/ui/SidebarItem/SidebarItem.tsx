import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import Arrow from 'shared/assets/icons/arrow.svg';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(item.isOpen);

    if (item?.path !== undefined) {
        return (
            <AppLink
                data-testid={'sidebar-toggle'}
                to={item.path}
                activeClassName={cls.active}
                className={classNames(cls.item, {
                    [cls.collapsed]: collapsed,
                })}
            >
                {item.Icon && <Icon Svg={item.Icon} />}
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        );
    }

    return (
        <>
            <div
                className={classNames(cls.item, {
                    [cls.collapsed]: collapsed,
                })}
            >
                <div
                    className={cls.nestedTitle}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {item.Icon && <Icon Svg={item.Icon} />}
                    <span className={cls.link}>{t(item.text)}</span>
                    <span className={cls.arrow}>
                        <Arrow />
                    </span>
                </div>
            </div>
            <ul
                className={classNames(cls.nestedList, {
                    [cls.nestedListCollapse]: isOpen,
                })}
            >
                {item?.nested?.map((nested) => (
                    <AppLink
                        activeClassName={cls.active}
                        to={nested.path}
                        key={nested.path}
                        className={classNames(cls.itemNested, {
                            [cls.collapsed]: collapsed,
                        })}
                    >
                        {nested.Icon && <Icon Svg={nested.Icon} />}
                        <span className={cls.link}>{t(nested.text)}</span>
                    </AppLink>
                ))}
            </ul>
        </>
    );
});
