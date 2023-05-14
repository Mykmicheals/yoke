import Map from 'react-map-gl';
import { useSelector } from 'react-redux';



function MapComponent() {

  const value = useSelector((state: any) => state.map)
  

  return (
     <Map
      initialViewState={{
        longitude: value.lat,
        latitude: value.lng,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}

    />
  )
}

export default MapComponent