/**
 * To string date (example format: April 13, 2026)
 * @param {string | date} date 
 * @returns {string}
 */
export function toStringDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}