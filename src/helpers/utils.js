export function firstLetterToUpper(str) {
  return str
    .split(' ')
    .map(m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())
    .join(' ');
}

export function compareDateWithToday(timeStamp) {
  return timeStamp === new Date().setHours(0, 0, 0, 0) ? true : false;
}

export function setTime0(date) {
  return new Date(date).setHours(0, 0, 0, 0);
}
