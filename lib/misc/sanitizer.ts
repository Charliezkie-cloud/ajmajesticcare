/**
 * Sanitize a string
 * @param {string} str
 * @returns {string}
 */
export default function sanitize(str: string): string {
  if (!str) return "";

  return str
    .replace(/\0/g, "")
    .replace(/[^\S\r\n]{2,}/g, " ")
    .replace(/(?:\r?\n){3,}/g, "\n\n")
    .trim();
}