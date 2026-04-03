import { ReactNode } from "react"

type props = {
  variant?: "primary" | "secondary" | "tertiary" | "neutral";
  size?: "sm" | "md" | "lg";
  role?: "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem";
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

export default function Badge({ variant = "primary", size = "md", role, className, children }: props) {
  const classes = [
    variants[variant],
    sizes[size],
    className
  ].join(" ");

  return (
    <span className={classes} role={role}>{children}</span>
  )
}