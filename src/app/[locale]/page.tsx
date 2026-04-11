import './page.css';
import Map from '@/components/Map';
import MarioButton from '@/components/ui/MarioButton';

export default function Dashboard() {
  return (
    <>
      <Map />
      <div className="absolute bottom-0 flex w-full justify-center gap-4 border-t-4 border-black bg-[#8B4513] p-4">
        <MarioButton label="Live" color="yellow" href="/live" />
        <MarioButton label="Spotify" color="green" href="/2026/spotify" />
      </div>
    </>
  );
}
