type Props = {
  label: string;
  color: 'yellow' | 'red' | 'blue' | 'green';
  href: string;
};

const colors = {
  yellow: 'bg-yellow-400',
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
};

export default function MarioButton({ label, color, href }: Props) {
  return (
    <a
      href={href}
      className={`flex-1 rounded-md border-4 border-black px-2 py-2 text-[10px] font-bold text-white sm:text-xs md:text-sm ${colors[color]} shadow-[0_4px_0_#000] transition-all active:translate-y-[2px] active:shadow-[0_2px_0_#000]`}
    >
      {label}
    </a>
  );
}
