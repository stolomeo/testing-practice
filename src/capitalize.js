function capitalize(string) {
  let newString = string.charAt(0).toUpperCase();
  return newString + string.slice(1, string.length);
}
module.exports = capitalize;
