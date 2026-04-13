import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "cursor-pointer bg-gradient-to-t from-neutral-800 to-neutral-700 text-neutral-300 hover:text-neutral-50",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "cursor-pointer border border-neutral-300 bg-gradient-to-t from-neutral-300 to-neutral-200 text-neutral-600 hover:text-neutral-700",
        secondary:
          "cursor-pointer border border-neutral-300/70 bg-[#F0F0F0] text-neutral-600 hover:bg-[#EBEBEB] hover:text-neutral-700",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-neutral-700 underline-offset-4 hover:text-neutral-900 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 text-xs has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
