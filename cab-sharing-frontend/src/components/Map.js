// src/components/Map.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center, zoom }) => {
  const [markers, setMarkers] = useState([]);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkers([...markers, { lat, lng }]);
      },
    });
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send markers to backend
    await fetch('http://localhost:8080/api/trips/pickup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(markers),
    });
  };

  return (
    <div>
      <MapContainer center={center} zoom={zoom} style={{ height: "80vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={[marker.lat, marker.lng]}>
            <Popup>
              A new marker at {marker.lat}, {marker.lng}
            </Popup>
          </Marker>
        ))}
        <MapEvents />
      </MapContainer>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Pickup Points</button>
      </form>
    </div>
  );
};

export default Map;
