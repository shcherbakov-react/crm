import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet';
import { DeliveryContent } from 'pages/DeliveryPage/ui/components/DeliveryContent';
import cls from './DeliveryMap.module.scss';

export const DeliveryMap = () => {
    const [collapse, setCollapse] = useState(false);

    const [center, setCenter] = useState<[number, number]>([
        45.011408, 41.901072,
    ]);

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 500);

    return (
        <div className={classNames(cls.Map, { [cls.collapse]: collapse }, [])}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
                className={classNames(cls.btn, { [cls.collapse]: collapse })}
                onClick={() => setCollapse(!collapse)}
            >
                <div>{collapse ? 'Развернуть' : 'Свернуть'}</div>
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="11"
                        cy="11"
                        r="10"
                        stroke="#141B34"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M7 12.5L10.7 9.725C10.8778 9.59167 11.1222 9.59167 11.3 9.725L15 12.5"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <MapContainer
                // bounds={polygon}
                className={cls.mapContainer}
                center={center}
                zoom={14}
            >
                <DeliveryContent collapse={collapse} />
            </MapContainer>
        </div>
    );
};
