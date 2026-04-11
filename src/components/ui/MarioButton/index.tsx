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
      className={`rounded-lg border-4 border-black px-5 py-3 font-bold text-white ${colors[color]} shadow-[0_6px_0_#000] transition-all active:translate-y-[4px] active:shadow-[0_2px_0_#000]`}
    >
      {label}
    </a>
  );
}
