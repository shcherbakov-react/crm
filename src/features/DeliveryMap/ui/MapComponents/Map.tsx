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


export const Map = () => {
    const [geojson, setGeojson] = useState<FeatureCollection>({
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-73.976344, 40.767867],
                            [-73.984754, 40.774237],
                            [-73.96742, 40.783206],
                            [-73.966733, 40.773067],
                            [-73.976344, 40.767867],
                        ],
                    ],
                },
            },
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-73.966304, 40.773782],
                            [-73.965789, 40.790679],
                            [-73.953861, 40.792109],
                            [-73.953861, 40.778007],
                            [-73.966304, 40.773782],
                        ],
                    ],
                },
            },
            {
                type: 'Feature',
                properties: { radius: 100 },
                geometry: { type: 'Point', coordinates: [-73.962357, 40.796658] },
            },
            {
                type: 'Feature',
                properties: { radius: 200 },
                geometry: { type: 'Point', coordinates: [-73.950858, 40.78691] },
            },
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [-73.972912, 40.78639],
                        [-73.984496, 40.780151],
                        [-73.984496, 40.776122],
                        [-73.970595, 40.781776],
                    ],
                },
            },
        ],
    });

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
    const ref = React.useRef<L.FeatureGroup>(null);
    const handleChange = () => {
        const geo = ref.current?.toGeoJSON();
        if (geo?.type === 'FeatureCollection') {
            setGeojson(geo);
        }
    };

    setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
    }, 10);

    return (
        <div className={classNames(cls.Map, { [cls.collapse]: collapse }, [])}>
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
            <MapContainer zoomControl={false} bounds={polygon} className={cls.mapContainer}
                          center={[45.015677, 41.903875]} zoom={14}>
                <MapZoom setIconSize={setIconSize} />
                <Marker icon={customMarkerIcon} position={[45.013677, 41.906875]}>
                    <Popup>
                        <div className={cls.popupTitle}>Кумейко А. (1/1)</div>
                    </Popup>
                </Marker>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.ope nstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={customMarkerIcon} position={[45.015677, 41.903875]} />
                <Polygon pathOptions={{ fillColor: 'purple' }} positions={polygon} />
                <NewLayers setNewZone={setNewZone} />
                <FeatureGroup ref={ref}>
                    <EditControl
                        position="topright"
                        onEdited={handleChange}
                        onCreated={handleChange}
                        onDeleted={handleChange}
                        draw={{
                            rectangle: false,
                            circle: true,
                            polyline: false,
                            polygon: true,
                            marker: true,
                            circlemarker: false,
                        }}
                    />
                </FeatureGroup>
            </MapContainer>
        </div>
    )
}


