import { useMapEvents } from 'react-leaflet';
import { useState } from 'react';


interface NewZoneProps {
    newZone: any
    setNewZone: any
}
// @ts-ignore
function NewLayers(props:NewZoneProps) {
    const [coordinates, setCoordinates] = useState([])
    const {newZone, setNewZone} = props
    const map = useMapEvents({
        click: (e) => {
            map.locate()
            setNewZone(prev => [...prev, [e.latlng.lat, e.latlng.lng]])
            // setCoordinates([e.latlng.lat, e.latlng.lng])
            // setNewZone(prev => [...prev + coordinates])
            console.log(newZone)
        },
    })
    return null;
}

export default NewLayers