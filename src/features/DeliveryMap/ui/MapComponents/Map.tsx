import cls from './Map.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import Courier from 'shared/assets/icons/courier.svg'
import { FeatureGroup, MapContainer, Marker, Polygon, Polyline, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import type { FeatureCollection } from 'geojson';

import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { SearchBox } from 'features/DeliveryMap/ui/MapComponents/SearchBox';
import NewLayers from 'features/DeliveryMap/ui/MapComponents/NewLayers';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import { MapZoom } from 'features/DeliveryMap/ui/MapComponents/MapZoom';
import { EditControl } from 'react-leaflet-draw';
import drawLocales from 'leaflet-draw-locales'

interface MapProps {
    className?: string;
}

export const Map = (props: MapProps) => {
    const {
        className,
    } = props;

    const [iconSize, setIconSize] = useState({ width: 22, height: 40 })

    const iconMarkup = renderToStaticMarkup(
        <Courier viewBox="0 0 32 52" style={{ width: iconSize.width, height: iconSize.height }} />
    );
    const customMarkerIcon = divIcon({
        html: iconMarkup
    });
    const [collapse, setCollapse] = useState(false);
    const [newZone, setNewZone] = useState<number[]>([])
    const polygon: [number, number][] = [
        [45.019456, 41.933020],
        [45.023698, 41.902784],
        [45.024823, 41.900284],
        [45.023376, 41.897328],
        [45.003174, 41.890653],
        [45.000264, 41.910393],
        [44.997218, 41.909686],
        [44.993269, 41.923269],
    ];

    setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
    }, 500);

    return (
        <div className={classNames(cls.Map, { [cls.collapse]: collapse }, [className])}>
            <div className={classNames(cls.btn, { [cls.collapse]: collapse })} onClick={() => setCollapse(!collapse)}>
                <div>
                    {collapse ? 'Развернуть' : 'Свернуть'}
                </div>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10" stroke="#141B34" strokeWidth="1.5" />
                    <path d="M7 12.5L10.7 9.725C10.8778 9.59167 11.1222 9.59167 11.3 9.725L15 12.5" stroke="#141B34"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <MapContainer bounds={polygon} className={cls.mapContainer} center={[45.015677, 41.903875]} zoom={14}>
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
                <Polygon pathOptions={{ fillColor: '#A259FF' }} positions={polygon} />
                <NewLayers setNewZone={setNewZone} />
            </MapContainer>
        </div>
    )
}


