import cls from './DeliveryMap.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Map } from 'features/DeliveryMap/ui/MapComponents/Map';

interface DeliveryMapProps {
    className?: string;
}

export const DeliveryMap = (props: DeliveryMapProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.deliveryMap, {}, [className])}>
            <Map />
        </div>
    )
}