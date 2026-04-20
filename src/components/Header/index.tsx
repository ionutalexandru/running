import { Coins, SportShoe, Snail } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center justify-around border-b-4 border-black bg-blue-600/90 px-3 py-2 text-xs font-bold text-white backdrop-blur md:text-sm">
      <div className="hidden sm:flex sm:items-center">
        <Coins /> 77
      </div>

      <div>
        <SportShoe /> 637.9 km
      </div>

      <div>
        <Snail /> 4&#39;39&#39;&#39;/km
      </div>

      <div className="d-flex flex-col">
        <div className="rounded border-2 border-black bg-yellow-400 px-3 py-1 text-black">
          LVL 2026
        </div>
        <span>
          <i>2026 Data (Updated: Apr 20)</i>
        </span>
      </div>
    </div>
  );
}
