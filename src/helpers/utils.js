export function firstLetterToUpper(str) {
  return str
    .split(' ')
    .map(m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())
    .join(' ');
}
