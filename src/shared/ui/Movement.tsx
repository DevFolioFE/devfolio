import Image from "next/image";
import { cn } from "../utils/cn";

interface MovementProps {
  Icon?: string;
  title: string;
  totalNumber: number;
  movement: number;
}

export function Movement({
  Icon,
  title,
  totalNumber,
  movement,
}: MovementProps) {
  const isIcon = Icon ? "w-[288px]" : "w-[220px]";
  return (
    <article
      className={cn(
        `flex ${isIcon} p-6 flex-col items-start gap-2 border border-solid border-[#DBE0E5] rounded-[8px]`,
      )}
    >
      <div className="flex items-center gap-[9px]">
        {Icon && <Image src={Icon} alt="repo" width={24} height={24} />}
        <span className="text-body-lg-medium">{title}</span>
      </div>
      <span className="text-h4">{totalNumber}</span>
      <span className="text-body-lg-medium text-[#088738]">+{movement}%</span>
    </article>
  );
}
