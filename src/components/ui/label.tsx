"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define label variants using `cva`
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    // Define variant options if needed
    variants: {
      // Example variant: color
      color: {
        primary: "text-blue-600",
        secondary: "text-gray-600",
      },
      // Example variant: size
      size: {
        small: "text-xs",
        large: "text-lg",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  }
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(props), className)} // Pass props to labelVariants to apply variants
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
