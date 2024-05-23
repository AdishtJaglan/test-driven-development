export function caesarCipher(word, shift) {
  const ucAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lcAlpha = "abcdefghijklmnopqrstuvwxyz";

  return word
    .split("")
    .map((char) => {
      if (ucAlpha.includes(char)) {
        let index = ucAlpha.indexOf(char);
        let newIndex = (index + shift) % 26;

        return ucAlpha[newIndex];
      } else if (lcAlpha.includes(char)) {
        let index = lcAlpha.indexOf(char);
        let newIndex = (index + shift) % 26;

        return lcAlpha[newIndex];
      } else {
        return char;
      }
    })
    .join("");
}
