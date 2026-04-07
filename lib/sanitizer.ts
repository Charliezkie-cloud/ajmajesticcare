export default function sanitize(str: string): string {
  if (!str) return "";

  return str
    .replace(/\0/g, "")
    // .replace(/[\r\n\t]/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}