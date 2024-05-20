import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import CurrentLocationButton from "../buttons/current.location.button";
import { CustomerIcon, MerchantIcon, RiderIcon } from "./marker";

function LocationMarker({ position, iconType }) {
  const map = useMap();

  // Define a custom icon
  const customIcon = new L.Icon({
    iconUrl: "src/app/assets/loc.marker/current.location.webp",
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
    }
  }, [position, map]);

  if (!position) return null;

  let icon;
  switch (iconType) {
    case "rider":
      icon = RiderIcon();
      break;
    case "merchant":
      icon = MerchantIcon();
      break;
    case "customer":
      icon = CustomerIcon();
      break;
    default:
      icon = RiderIcon();
  }

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MapComponent = ({
  riderLocation,
  merchantLocation,
  customerLocation,
}) => {
  const [position, setPosition] = useState(null);

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

  return (
    <MapContainer
      center={[14.676, 121.0437]}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={position} iconType="rider" />
      <LocationMarker position={merchantLocation} iconType="merchant" />
      <LocationMarker position={customerLocation} iconType="customer" />
      <CurrentLocationButton locateUser={locateUser} />
    </MapContainer>
  );
};

export default MapComponent;
