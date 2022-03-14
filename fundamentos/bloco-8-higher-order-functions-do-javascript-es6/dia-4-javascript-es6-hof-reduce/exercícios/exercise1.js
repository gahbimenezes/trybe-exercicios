const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  // escreva seu código aqui
  let unitedArrays = array.reduce(( acc, item ) => acc.concat(item));
  return unitedArrays    
}

console.log(flatten(arrays));