import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

export function AboutCard({ title, description, icon }: CardProps) {
  return (
    <li className="flex flex-col items-start bg-white rounded-3xl p-8 text-start gap-4 border border-[#FEF7E6] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Container do Ícone */}
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[linear-gradient(135deg,#FE7500_60%,#FAA500)] mb-2 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
        <FontAwesomeIcon className="text-2xl text-white" icon={icon} />
      </div>

      <h3 className="font-bold text-2xl text-gray-900">{title}</h3>

      <p className="text-gray-500 leading-relaxed">{description}</p>
    </li>
  );
}
