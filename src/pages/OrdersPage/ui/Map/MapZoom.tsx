import { useMapEvents } from 'react-leaflet';

interface MapZoomProps {
    setIconSize: any
}
export const MapZoom = (props) => {
    const {setIconSize} = props
    const map = useMapEvents({
        zoom: () => {
            const zoomSize = map.getZoom()
            zoomSize < 16 ? setIconSize({width: 22, height: 40}) : setIconSize({width: 32, height: 52})
        },
    })
    return null
}