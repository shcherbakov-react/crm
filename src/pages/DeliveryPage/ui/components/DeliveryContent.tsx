import { CourierList } from 'features/CouriersList/ui/CourierList';
import { MapZoom } from 'features/DeliveryMap/ui/MapComponents/MapZoom';
import { Marker, Polygon, Popup, TileLayer, useMap } from 'react-leaflet';
import cls from 'features/DeliveryMap/ui/DeliveryMap.module.scss';
import NewLayers from 'features/DeliveryMap/ui/MapComponents/NewLayers';
import React, { useState } from 'react';
import { customMarkerIcon } from './DeliveryMarker';

interface panToProps {
    panTo: (arg: string[]) => void;
}

interface DeliveryContentProps {
    collapse: boolean;
}
export const DeliveryContent = (props: DeliveryContentProps) => {
    const [iconSize, setIconSize] = useState({ width: 22, height: 40 });
    const map = useMap();
    const { collapse } = props;
    const polygon: [number, number][] = [
        [45.019456, 41.93302],
        [45.023698, 41.902784],
        [45.024823, 41.900284],
        [45.023376, 41.897328],
        [45.003174, 41.890653],
        [45.000264, 41.910393],
        [44.997218, 41.909686],
        [44.993269, 41.923269],
    ];
    const [newZone, setNewZone] = useState<number[]>([]);

    const handleFunction: panToProps['panTo'] = (arg) => {
        map.panTo([Number(arg[0]), Number(arg[1])]);
    };

    return (
        <>
            {!collapse && <CourierList panTo={handleFunction} />}
            <MapZoom setIconSize={setIconSize} />
            <Marker icon={customMarkerIcon} position={[45.013677, 41.906875]}>
                <Popup>
                    <div className={cls.popupTitle}>Кумейко А. (1/1)</div>
                </Popup>
            </Marker>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={customMarkerIcon} position={[45.015677, 41.903875]} />
            <Polygon
                pathOptions={{ fillColor: '#A259FF' }}
                positions={polygon}
            />
            <NewLayers setNewZone={setNewZone} />
        </>
    );
};
