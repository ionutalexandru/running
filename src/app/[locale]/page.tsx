import './page.css';
import Map from '@/components/Map';
import MarioButton from '@/components/ui/MarioButton';
import Header from '@/components/Header';

export default function Dashboard() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 z-0">
        <Map />
      </div>
      <div className="absolute top-0 z-10 w-full pt-[env(safe-area-inset-top)]">
        <Header />
      </div>
      <div className="absolute bottom-0 z-10 w-full pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-between gap-2 border-t-4 border-black bg-[#8B4513]/95 p-2 backdrop-blur">
          <MarioButton label="Live" color="yellow" href="/live" />
          <MarioButton label="Spotify" color="green" href="/2026/spotify" />
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center gap-4 border-t-4 border-black bg-[#8B4513] p-4"></div>
    </div>
  );
}
