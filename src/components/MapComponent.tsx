import { useSelector } from "react-redux";
import Map, { Popup, Marker } from "react-map-gl";
import { MdCancel } from "react-icons/md";

import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";

function MapComponent() {
  const value = useSelector((state: any) => state.map);
  const [showPopup, setShowPopup] = useState(false);



  return (
    <div className="mt-24">
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{ height: "54vh", width: "90%" }}
        longitude={value.lng}
        latitude={value.lat}
        zoom={10}
      >
        <Marker onClick={()=>setShowPopup(true)} longitude={value.lng} latitude={value.lat} anchor="bottom">
          <HiLocationMarker size={32} color="red" />
        </Marker>

           {showPopup ? (
                  <Popup
                    className="z-1000 bg-red"
                    longitude={value.lng}
                    latitude={value.lat}
                    anchor="bottom"
              
                  >
               
                  </Popup>
                ) : null}

      </Map>
    </div>
  );
}

export default MapComponent;
