import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import CurrentLocationButton from "../buttons/current.location.button";
import greenLocMarker from "../../assets/loc.marker/current.location.webp";

function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{" "}
      <button onClick={onClick}>reset</button>
    </p>
  );
}

function LocationMarker({ position, iconType }) {
  const map = useMap();

  // Define a custom icon
  const customIcon = new L.Icon({
    iconUrl: greenLocMarker,
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const merchantIcon = new L.Icon({
    iconUrl: greenLocMarker,
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const riderIcon = new L.Icon({
    iconUrl: greenLocMarker,
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

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState([14.676, 121.0437]);

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
      // Once we get the position, we set the map center
      setMapCenter(position);
    }
  }, [position]);

  return (
    <MapContainer
      center={position || mapCenter}
      zoom={20}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ height: "100%", width: "100%" }}
      className="flex-1 h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={position} />
      <CurrentLocationButton locateUser={locateUser} />
    </MapContainer>
  );
};

export default MapComponent;
//save
