import cls from './TopBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';

interface TopBarProps {
    className?: string
    title: string
    items?: IItems[]
}

interface IItems {
    title: string
    value: number
}

export const TopBar = (props: TopBarProps) => {
    const {
        className,
        title,
        items,
    } = props;

    return (
        <div className={classNames(cls.infoWrapper, {}, [className])}>
            <div className={cls.info}>
                <div className={cls.title}>
                    {title}
                </div>
                {items &&
                    <div className={cls.infoItems}>
                        {items.map((item) => (
                            <div className={cls.item}>
                                {item.title}
                                :
                                {item.value}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
