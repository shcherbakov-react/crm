import cls from './Map.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Circle, MapContainer, Marker, Polygon, Polyline, Popup, Rectangle, TileLayer, useMapEvents } from 'react-leaflet';
import { iconPerson } from './MapIcon'

import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { SearchBox } from 'pages/OrdersPage/ui/Map/SearchBox';
import NewLayers from 'pages/OrdersPage/ui/Map/NewLayers';

interface MapProps {
    className?: string;
}

interface ParamsProps {
    q: string;
    format: string;
    addressdetails: number;
    polygon_geojson: number;
}

interface requestOptionsProps {
    method: string,
    redirect: string
}


export const Map = (props: MapProps) => {
    const {
        className,
    } = props;

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

    // @ts-ignore
    // @ts-ignore
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
                {/*<SearchBox />*/}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[45.015677, 41.903875]}>
                </Marker>
                        <Polyline  positions={[newZone] as any} pathOptions={{ fillColor: 'red' }} />
                {/*{newZone && newZone.map((item) => (*/}
                {/*    )*/}
                {/*)}*/}
                <Polygon pathOptions={{ fillColor: 'purple' }} positions={polygon} />
                <NewLayers newZone={newZone} setNewZone={setNewZone} />
            </MapContainer>
        </div>
    )
}


