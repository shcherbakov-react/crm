import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import Courier from 'shared/assets/icons/courier.svg';
import React, { useState } from 'react';

const iconMarkup = renderToStaticMarkup(
    <Courier
        viewBox="0 0 32 52"
        style={{ width: 22, height: 40 }}
    />,
);

export const customMarkerIcon = divIcon({
    html: iconMarkup,
});
