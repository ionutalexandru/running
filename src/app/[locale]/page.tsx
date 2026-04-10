import Map from '@/components/Map';

export default function Dashboard() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[1fr,320px]">
      <div className="relative">
        <Map />
      </div>
    </div>
  );
}
