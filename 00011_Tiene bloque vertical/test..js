it(`Si hacemos tieneBloqueVertical([
  [4, 2, 3],
  [1, 5, 3],
  [1, 2, 3],
]) debería retornar true`, function() {
  let resultado = tieneBloqueVertical([
  [4, 2, 3],
  [1, 5, 3],
  [1, 2, 3],
])
  assert.equal(resultado, true,`tieneBloqueVertical debería retornar true pero fue ${resultado}`);
})

it(`Si hacemos tieneBloqueVertical([
  [1, 2, 3, 4],
  [7, 2, 9, 2],
  [1, 8, 4, 5],
])  debería retornar false`, function() {
  let resultado = tieneBloqueVertical([
  [1, 2, 3, 4],
  [7, 2, 9, 2],
  [1, 8, 4, 5],
]) 
  assert.equal(resultado, false,`tieneBloqueVertical debería retornar false pero fue ${resultado}`);
})