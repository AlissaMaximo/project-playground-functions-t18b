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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
Desafio 3 feito com .split() visto no W3Schools: https://www.w3schools.com/jsref/jsref_split.asp

Desafio 4 usa-se `, {} e $ para retornar sem problemas com o Eslint; descoberto com Kesley Muniz, Tonn e deixando o mouse por cima do erro e então clicando em quick fix.
*/
