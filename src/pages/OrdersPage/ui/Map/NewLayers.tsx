import { useMapEvents } from 'react-leaflet';

interface NewZoneProps {
    setNewZone: any
}

function NewLayers(props:NewZoneProps) {
    const {setNewZone} = props
    const map = useMapEvents({
        click: (e) => {
            map.locate()
            setNewZone(prev => [...prev, [e.latlng.lat, e.latlng.lng]])
        },
    })
    return null;
}

export default NewLayers