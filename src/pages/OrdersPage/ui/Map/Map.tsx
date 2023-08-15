import cls from './Map.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { iconPerson } from './MapIcon'
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import { SearchBox } from 'pages/OrdersPage/ui/Map/SearchBox';

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
            <MapContainer className={cls.mapContainer} center={[45.015677, 41.903875]} zoom={16}>
                <SearchBox />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[45.015677, 41.903875]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>

            </MapContainer>
        </div>
    )
}


