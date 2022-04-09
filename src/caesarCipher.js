function ceasarCipher(string, n) {
  let arr = [];
  let newArr = [];
  for (let i = 0; i < string.length; i++) {
    let code;
    if (string.charCodeAt(i) === 32) {
      code = string.charCodeAt(i);
      arr.push(code);
    } else {
      code = string.charCodeAt(i) + n;
      arr.push(code);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let char = String.fromCharCode(arr[i]);
    newArr.push(char);
  }
  return newArr.join("");
}

module.exports = ceasarCipher;
