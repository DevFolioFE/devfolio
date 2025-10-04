"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  color,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value || 0), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full flex-1 transition-all duration-500",
          color,
        )}
        style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
