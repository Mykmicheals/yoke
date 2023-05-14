import { useSelector } from "react-redux";
import Map, { Popup, Marker } from "react-map-gl";
// import { MdCancel } from "react-icons/md";

import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";
import WeatherComponent from "./WeatherComponent";

function MapComponent() {
  const value = useSelector((state: any) => state.map);
  const [showPopup, setShowPopup] = useState(false);

    const handleMarkerClick = () => {
    setShowPopup(true);
  };

  

  return (
    <div className="mt-24 mx-auto w-4/5">
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{ height: '54vh' }}
        longitude={value.lng}
        latitude={value.lat}
        zoom={10}
      >
        <Marker
          longitude={value.lng}
          latitude={value.lat}
          anchor="bottom"
        >
          <HiLocationMarker  onClick={handleMarkerClick} size={32} color="red" />
        </Marker>

        {showPopup && (
          <Popup
            className="mt-28"
            longitude={value.lng}
            latitude={value.lat}
           
            onClose={() => setShowPopup(false)}
          closeOnClick={false}
            anchor="bottom"
          >
            <WeatherComponent showPopup = {showPopup} />
          </Popup>
         )} 
      </Map>
    </div>
  );
}

export default MapComponent;
