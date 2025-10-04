import { Progress } from "@/components/ui/progress";

interface StackProficiencyProps {
  title: string;
  percentage: number;
  color: string;
}

export function StackProficiency({
  title,
  percentage,
  color,
}: StackProficiencyProps) {
  return (
    <article className="flex w-[320px] p-4 flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-body-lg-medium">{title}</span>
        <span className="text-body-md-regular">{percentage}%</span>
      </div>
      <Progress
        value={percentage}
        className={`w-[288px] h-[8px]`}
        color={color}
      />
    </article>
  );
}
