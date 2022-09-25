export default function range(start: number, end: number, step: number = 1) {
  const array = [];
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}
