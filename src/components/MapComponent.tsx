import { useSelector } from "react-redux";
import Map, { Popup, Marker } from "react-map-gl";
import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";
import WeatherComponent from "./WeatherComponent";

// added the following 6 lines.
import mapboxgl from "mapbox-gl";

// The following is required to stop "npm build" from transpiling mapbox code.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function MapComponent() {
  const value = useSelector((state: any) => state.map);
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkerClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="mt-16 mx-auto w-4/5">
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{ height: "54vh" }}
        longitude={value.lng}
        latitude={value.lat}
        zoom={10}
      >
        <Marker longitude={value.lng} latitude={value.lat} anchor="bottom">
          <HiLocationMarker onClick={handleMarkerClick} size={32} color="red" />
        </Marker>

        {showPopup && (
          <Popup
            className="mt-44 md:mt-28"
            longitude={value.lng}
            latitude={value.lat}
            onClose={() => setShowPopup(false)}
            closeOnClick={false}
            anchor="bottom"
          >
            <WeatherComponent showPopup={showPopup} />
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapComponent;
