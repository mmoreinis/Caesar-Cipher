function runCipher(str) {
  
  let codes = [];
  let shift = Math.floor(Math.random()*13)+1);
  for (let i = 0; i < str.length; i++) {
    codes.push(str.charCodeAt(i));
  }
  console.log(codes);

  let newCodes = codes.map(code => {
    let temp;
    if (code >= 65 && code <= 77) {
      temp = code + shift;
    } else if (code >= 78 && code <= 90) {
      temp = code - shift;
    } else {
      temp = code;
    }
    return String.fromCharCode(temp);
  })
  console.log(newCodes);

  return newCodes.join("");
}

runCipher("SERR PBQR PNZC");
// returns "FREE CODE CAMP"
