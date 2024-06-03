import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./loc.marker";
import BottomContainer from "../layout/bottom.container";
import CurrentLocationButton from "../buttons/current.location.button";

const MapComponent = ({ stops }) => {
  const [position, setPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState([14.6384983, 121.0576078]);

  const locateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error(error.message);
          alert(
            "Unable to retrieve your location. Make sure location services are enabled."
          );
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  useEffect(() => {
    locateUser();
  }, []);

  useEffect(() => {
    if (position) {
      setMapCenter(position);
    }
  }, [position]);

  const positions = {
    current: position,
    stops: stops || [],
  };

  return (
    <MapContainer
      center={position || mapCenter}
      zoom={14}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: "100%", width: "100%" }}
      className="flex-1 h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker positions={positions} />
      {/* <CurrentLocationButton locateUser={locateUser} /> */}
    </MapContainer>
  );
};

export default MapComponent;
