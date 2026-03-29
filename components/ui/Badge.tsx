import { ReactNode } from "react"

type props = {
  variant?: "primary" | "secondary" | "tertiary" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
};

const variants = {
  primary: "bg-primary/10 text-foreground p-2 rounded-full px-6",
  secondary: "bg-secondary/10 text-foreground p-2 rounded-full px-6",
  tertiary: "bg-tertiary/10 text-foreground p-2 rounded-full px-6",
  neutral: "bg-neutral/10 text-foreground p-2 rounded-full px-6",
};

const sizes = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};

export default function Badge({ variant = "primary", size = "md", className, children }: props) {
  const classes = [
    variants[variant],
    sizes[size],
    className
  ].join(" ");

  return (
    <span className={classes}>{children}</span>
  )
}