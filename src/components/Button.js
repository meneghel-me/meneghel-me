import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../lib/utils"

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
  ghost: "text-gray-900 hover:bg-gray-100",
  destructive: "bg-red-600 text-white hover:bg-red-700",
}

const Button = React.forwardRef(({ className, variant = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2",
        buttonVariants[variant],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }
