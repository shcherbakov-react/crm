import cls from './DeliveryPage.module.scss'
import {classNames} from 'shared/lib/classNames/classNames';

interface DeliveryPageProps {
    className?: string;
}

export const DeliveryPage = (props: DeliveryPageProps) => {
const {
    className,
} = props;

    return (
    <div className={classNames(cls.deliveryPage, {}, [className])}>

    </div>
    )
}