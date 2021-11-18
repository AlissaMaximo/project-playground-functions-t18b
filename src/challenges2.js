// Desafio 10
function techList(array, name) {
  // seu código aqui
  let newArr = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    newArr.push({ tech: array[i], name });
  }
  return newArr;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

/*
  Desafio 10 precisou do sort() para ordenar alfabeticamente os elementos. Fonte: https://www.w3schools.com/jsref/jsref_sort.asp
  
*/
