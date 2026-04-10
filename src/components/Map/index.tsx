'use client';
import dynamic from 'next/dynamic';

const MapDisplay = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[60vh] animate-pulse rounded-3xl border border-gray-200 bg-gray-100 md:h-[70vh]" />
  ),
});

export default function MapWrapper() {
  return <MapDisplay />;
}
