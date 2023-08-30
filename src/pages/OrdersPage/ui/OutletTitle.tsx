import cls from './OrdersPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

interface outletTitleProps {
    outlet?: {
        outletTitle?: string
        outletTitleColor?: string
        outletId?: number
    };
    className?: string;
}

export const OutletTitle = (props: outletTitleProps) => {
    const {
        outlet,
        className,
    } = props;

    return (
        <div style={{ backgroundColor: outlet.outletTitleColor }}
             className={classNames(cls.outletTitle, {}, [className])}>
            {outlet.outletTitle.slice(0, 1)}
        </div>
    )
}