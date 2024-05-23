export function analyseArray(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  const length = arr.length;

  arr.map((num) => {
    if (num > max) max = num;

    if (num < min) min = num;

    sum += num;
  });

  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}
