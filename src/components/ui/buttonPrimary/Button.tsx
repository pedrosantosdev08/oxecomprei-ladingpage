

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
}

export function ButtonPrimary({ title, icon }: ButtonProps) {
  return (
    <button className="bg-linear-to-r from-orange-highlight to-orange text-white cursor-pointer font-bold px-5 py-3 rounded-2xl gap-2 flex items-center hover:brightness-110 transition-all">
      {icon}
      {title}
    </button>
  );
}

export function ButtonSecondary({ title, icon }: ButtonProps) {
  return (
    <button className="bg-white border-2 cursor-pointer border-orange-highlight text-orange-highlight hover:bg-orange-50 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all">
      {title}
      {icon}
    </button>
  );
}
