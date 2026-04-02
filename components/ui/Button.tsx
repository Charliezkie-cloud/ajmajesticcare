import { MouseEvent, ReactNode } from "react";
import Link from "next/link";

type props = {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "inverted" | "outlined";
  size?: "sm" | "md" | "lg" | "auto";
  className?: string
  href?: string
  disabled?: boolean
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const variants = {
  primary: "bg-primary text-gray-200 hover:bg-primary/75 active:bg-primary/50 shadow shadow-lg shadow-primary/25 hover:shadow-primary/35 active:shadow-primary/45",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300/75 active:bg-gray-300/50",
  inverted: "bg-neutral/90 text-gray-200 hover:bg-neutral/70 active:bg-neutral/50",
  outlined: "bg-transparent text-gray-800 border hover:bg-gray-200 active:bg-gray-300",
};

const sizes = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  auto: "text-sm md:text-md"
};

export default function Button({ type = "button", variant = "primary", size = "md", className, href, disabled, onClick, children }: props) {
  const classes = [
    "transition px-6 py-3 rounded-lg",
    variants[variant],
    sizes[size],
    className
  ].join(" ");

  if (href) return <Link href={href} className={classes}>{children}</Link>
  
  return <button type={type} className={classes} onClick={onClick} disabled={disabled}>{children}</button>
}