export function revString(str) {
  if (!str) return -1;
  return str.split("").reverse().join("");
}
