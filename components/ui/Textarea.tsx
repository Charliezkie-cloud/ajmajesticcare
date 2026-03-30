import { ChangeEvent, ReactNode } from "react";

type props = {
  id?: string;
  name?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  children?: ReactNode;
}

const variants = {
  primary: "bg-primary/5 hover:bg-primary/10 outline-primary/25 focus:outline-2 focus:outline-offset-2 focus:outline-primary/25 text-foreground",
  secondary: "bg-secondary/5 hover:bg-secondary/10 outline-secondary/25 focus:outline-2 focus:outline-offset-2 focus:outline-secondary/25 text-foreground",
  tertiary: "bg-tertiary/5 hover:bg-tertiary/10 outline-tertiary/25 focus:outline-2 focus:outline-offset-2 focus:outline-tertiary/25 text-foreground",
};

const sizes = {
  sm: "text-sm py-2 px-4",
  md: "text-md py-3 px-5",
  lg: "text-lg py-3 px-5",
};

export default function Textarea({ id, name, variant = "primary", size = "md", className, rows = 4, placeholder, required = false, value, onChange, children }: props) {
  const classes = [
    "transition border-none rounded-lg",
    variants[variant],
    sizes[size],
    className
  ].join(" ");

  return (
    <textarea id={id} name={name} className={classes} rows={rows} placeholder={placeholder} required={required} value={value} onChange={onChange}>{children}</textarea>
  )
}