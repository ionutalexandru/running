'use client';
import { renderToString } from 'react-dom/server';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import ClassicMushroomPin from '@/components/ui/Icons/ClassicMushroomPin';

const mushroomHtml = renderToString(
  <div className="h-10 w-10 cursor-pointer drop-shadow-[0_0_15px_#39FF14] transition-transform hover:scale-110">
    <ClassicMushroomPin />
  </div>
);

const marioMushroomIcon = L.divIcon({
  html: mushroomHtml,
  className: 'bg-transparent border-none',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const runs = [
  { city: 'Verona', coords: [45.43879, 10.98974], km: '21.1 km' },
  { city: 'Munich', coords: [48.1351, 11.582], km: '21.1 km & 42.2 km' },
  { city: 'Madrid', coords: [40.4168, -3.7038], km: '10 km' },
  { city: 'Naples', coords: [40.8358, 14.2486], km: '21.1 km' },
  { city: 'Malta', coords: [35.917973, 14.409943], km: '21.1 km' },
  { city: 'Limassol', coords: [34.6791, 33.0392], km: '21.1 km' },
];

function MapPins() {
  return (
    <>
      {runs.map((run) => (
        <Marker key={run.city} position={run.coords as [number, number]} icon={marioMushroomIcon}>
          <Popup>
            <div className="font-bold">
              {run.city} <br />
              {run.km}
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default function Map() {
  return (
    <div className="h-full w-full">
      <MapContainer center={[48.1351, 11.582]} zoom={6} className="z-0 h-full w-full">
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}" />
        <MapPins />
      </MapContainer>
    </div>
  );
}
