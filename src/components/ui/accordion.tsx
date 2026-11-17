import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "group/item rounded-2xl border border-pulz-200 bg-white px-6 transition-colors data-[state=open]:bg-pulz-100/50",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-5 text-left text-base font-medium transition-all hover:text-pulz-700 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-pulz-600 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * Always mounted (forceMount) so every answer is in the prerendered HTML for
 * crawlers and matches the FAQPage schema.
 *
 * The open/close animation lives on an inner wrapper, driven by the item's
 * data-state: Radix briefly forces `transition-duration: 0s` on the Content
 * element itself to measure it, which would cancel a transition placed there.
 * Grid rows 0fr → 1fr animates height smoothly in both directions; `invisible`
 * (applied after the close transition) keeps closed answers out of the tab
 * order and the accessibility tree.
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>, "forceMount">
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} forceMount className="text-sm text-muted-foreground" {...props}>
    <div className="invisible grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,visibility] duration-300 ease-out motion-reduce:transition-none group-data-[state=open]/item:visible group-data-[state=open]/item:grid-rows-[1fr] group-data-[state=open]/item:opacity-100">
      <div className="min-h-0 overflow-hidden">
        <div className={cn("pb-5 pt-0 leading-relaxed", className)}>{children}</div>
      </div>
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
