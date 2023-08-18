import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <>
            {item?.path !== undefined ?
                <AppLink
                    to={item.path}
                    className={classNames(cls.itemRedesigned, {
                        [cls.collapsedRedesigned]: collapsed,
                    })}
                >
                    {item.Icon && <Icon Svg={item.Icon} />}
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
                :
                <div>
                    <p>{item.text}</p>
                    {item?.nested?.map((item) => (
                        <ul>
                            <AppLink
                                to={item.path}
                                className={classNames(cls.itemNested, {
                                    [cls.collapsedRedesigned]: collapsed,
                                })}
                            >
                                {item.Icon && <Icon Svg={item.Icon} />}
                                <span className={cls.link}>{t(item.text)}</span>
                            </AppLink>
                        </ul>
                    ))}
                </div>
            }
        </>
    )
        ;
});
