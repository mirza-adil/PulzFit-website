import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  /** Hide when screen content already includes a status bar / Dynamic Island */
  showNotch?: boolean;
}

export function PhoneMockup({
  children,
  className,
  showNotch = true,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] rounded-[2.85rem] bg-zinc-950 p-[11px] shadow-elevated ring-1 ring-zinc-700/60",
        className
      )}
    >
      {showNotch ? (
        <div className="absolute left-1/2 top-[18px] z-10 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black" />
      ) : null}
      <div className="relative h-[560px] overflow-hidden rounded-[2.15rem] bg-[#f3f5f2]">
        {children}
      </div>
    </div>
  );
}
