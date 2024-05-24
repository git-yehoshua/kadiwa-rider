import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import greenLocMarker from "../../assets/loc.marker/rider.loc.marker.webp";
import merchantLocMarker from "../../assets/loc.marker/merchant.loc.marker.webp";
import customerLocMarker from "../../assets/loc.marker/costumer.loc.marker.webp";

const LocationMarker = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions.current) {
      map.flyTo(positions.current, map.getZoom());
    }
  }, [positions, map]);

  const getIcon = (type) => {
    let iconUrl;
    switch (type) {
      case "current":
        iconUrl = greenLocMarker;
        break;
      case "merchant":
        iconUrl = merchantLocMarker;
        break;
      case "customer":
        iconUrl = customerLocMarker;
        break;
      default:
        iconUrl = greenLocMarker;
    }
    return new L.Icon({
      iconUrl: iconUrl,
      iconSize: [38, 38],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });
  };

  return (
    <>
      {positions.current && (
        <Marker position={positions.current} icon={getIcon("current")}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      {positions.stops &&
        positions.stops.map((stop, index) => (
          <Marker
            key={index}
            position={stop.position}
            icon={getIcon(stop.type)}
          >
            <Popup>{stop.label}</Popup>
          </Marker>
        ))}
    </>
  );
};

export default LocationMarker;
