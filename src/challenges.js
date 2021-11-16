// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return (value1 === true && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(param, splitArray) {
  splitArray = param.split(' ');
  return splitArray;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let i = array.length - 1;
  return `${array[i]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result;
  result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(param) {
  // seu código aqui
  let biggest = Math.max(...param);
  let counter = 0;
  param.forEach((current) => { if (current === biggest) { counter += 1; } });
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  return 'Os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrNum) {
  // seu código aqui
  arrString = [];
  for (let i = 0; i < arrNum.length; i += 1) {
    if (arrNum[i] % 3 == 0 && arrNum[i] % 5 == 0) {
      arrString.push("fizzBuzz");
    } else if (arrNum[i] % 3 == 0) {
      arrString.push("fizz");
    } else if (arrNum[i] % 5 == 0) {
      arrString.push("buzz");
    } else {
      arrString.push("bug!");
    }
  }
  return arrString;
}

// Desafio 9
function encode(param) {
  // seu código aqui
  let newPhrase = param.replace(/a/gi, 1);
  newPhrase = newPhrase.replace(/e/gi, 2);
  newPhrase = newPhrase.replace(/i/gi, 3);
  newPhrase = newPhrase.replace(/o/gi, 4);
  newPhrase = newPhrase.replace(/u/gi, 5);
  return newPhrase;
}

function decode(param) {
  // seu código aqui
  let newPhrase = param.replace(/1/g, "a");
  newPhrase = newPhrase.replace(/2/g, "e");
  newPhrase = newPhrase.replace(/3/g, "i");
  newPhrase = newPhrase.replace(/4/g, "o");
  newPhrase = newPhrase.replace(/5/g, "u");
  return newPhrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

/*

REFERÊNCIAS

Desafio 3 feito com .split() visto no W3Schools: https://www.w3schools.com/jsref/jsref_split.asp

Desafio 4 usa-se `, {} e $ para retornar sem problemas com o Eslint; descoberto com Kesley Muniz, Tonn e deixando o mouse por cima do erro e então clicando em quick fix.

Desafio 6 teve como referências https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max para Math.max() e https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach para forEach.

Desafio 7 possui o Math.abs(), o qual peguei do https://www.w3schools.com/jsref/jsref_abs.asp

Desafio 9 possui o .replace() deste site: https://www.w3schools.com/jsref/jsref_replace.asp

*/
