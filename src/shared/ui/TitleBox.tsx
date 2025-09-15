/**
 *
 * Title Box component
 * @param title - Display text for the title
 * @returns {JSX.Element}
 */

import { cn } from "@/shared/utils/cn";

export function TitleBox({ title }: { title: string }) {
  return (
    <div className={cn("flex h-[60px] w-[960px] items-start px-4 pt-5 py-3")}>
      <h2 className={cn("text-h5")}>{title}</h2>
    </div>
  );
}
