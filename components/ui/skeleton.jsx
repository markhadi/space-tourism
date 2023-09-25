import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[rgb(241,245,249)]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
