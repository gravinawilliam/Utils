export function randomHash(numbers: boolean, uppercase: boolean, lowercase: boolean, symbols: boolean, length: number): string {
  let alphabet = [];
  let password = '';

  if(numbers === true)
    alphabet = [...alphabet, ...arrayNumbers];

  if(uppercase === true)
    alphabet = [...alphabet, ...arrayUpper];

  if(lowercase === true)
    alphabet = [...alphabet, ...arrayLower];

  if(symbols === true)
    alphabet = [...alphabet, ...arraySymbols];

  for(let i = 0; i < length; i++) {
    let index = returnIndex(alphabet.length);
    password += alphabet[index];
  }

  return password;
}

function returnIndex(length: number): number {
  return Math.floor(Math.random() * length);
}


const alphaNumbers = '5983016742';
const alphaUpper = 'ZHAQWBNMCVKJERTYUIOÇLXGFDSP';
const alphaLower = 'qçlkjpoiuytrewhgfdsamnbvcxz';
const alphaSymbols = '&()_+#$-={}[];\~!@%^|/';

const arrayNumbers = alphaNumbers.split('');
const arrayLower = alphaLower.split('');
const arraySymbols = alphaSymbols.split('');
const arrayUpper = alphaUpper.split('');