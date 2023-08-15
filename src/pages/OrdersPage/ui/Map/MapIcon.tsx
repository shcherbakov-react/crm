import L from 'leaflet'
import IconMap from 'shared/assets/icons/man.svg'

const iconPerson = new L.Icon({
    // iconUrl: IconMap,
    // iconRetinaUrl: IconMap,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});


export { iconPerson };