import React, { useState, useRef, useEffect } from "react";
type props = {
  center: google.maps.LatLngLiteral;
  zoom: number;
  className?: string;
};
const Map: React.FC<props> = ({ center, zoom, ...props }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    const marker = new window.google.maps.Marker({ position: center, map });
  });

  return <div ref={ref} id="map" {...props} />;
};

export default Map;
