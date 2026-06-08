import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] rounded-[2.75rem] border border-pulz-200 bg-white p-3 shadow-card",
        className
      )}
    >
      <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black/70" />
      <div className="relative h-[560px] overflow-hidden rounded-[2.1rem] border border-border bg-pulz-900">
        {children}
      </div>
    </div>
  );
}
