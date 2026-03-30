import { ChangeEvent } from "react";

type props = {
  id?: string;
  name?: string;
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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

export default function Input({ id, name, type = "text", variant = "primary", size = "md", className, placeholder, autoComplete, required = false, value, onChange }: props) {
  const classes = [
    "transition border-none rounded-xl",
    variants[variant],
    sizes[size],
    className
  ].join(" ");

  return (
    <input id={id} name={name} type={type} className={classes} placeholder={placeholder} autoComplete={autoComplete} value={value} onChange={onChange} required={required} />
  )
}