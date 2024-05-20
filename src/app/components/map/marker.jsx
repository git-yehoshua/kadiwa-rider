import React from "react";
import L from "leaflet";

const createCustomIcon = (className, text) => {
  return L.divIcon({
    className: "",
    html: `<div class="${className}">${text}</div>`,
    iconSize: [30, 42], // Adjust the size as needed
    iconAnchor: [15, 42], // Anchor the icon properly
    popupAnchor: [0, -42], // Adjust the popup position
  });
};

export const RiderIcon = () =>
  createCustomIcon("bg-blue-500 text-white p-2 rounded-full", "R");
export const MerchantIcon = () =>
  createCustomIcon("bg-green-500 text-white p-2 rounded-full", "M");
export const CustomerIcon = () =>
  createCustomIcon("bg-red-500 text-white p-2 rounded-full", "C");
