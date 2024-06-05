export default function cleanSet(set, startString) {
  if (!startString || !set) {
    return '';
  }
  return Array.from(set).filter((str) => str && str.startsWith(startString))
    .map((str) => str.replace(startString, ''))
    .join('-');
}
