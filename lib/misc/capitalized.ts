/**
 * Capitalized the given words
 * @param words 
 * @returns {string}
 */
export function capitalizedWords(words: string): string {
  return words.replace(
    /(^\w|\s\w)/g,
    m => m.toUpperCase()
  );
}