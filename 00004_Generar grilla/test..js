it("Si hacemos generarGrilla(2, 3, [1, 2]) debería retornar [
    [1, 1, 2], 
    [2, 1, 1]
  ]", function(){
  let resultado = generarGrilla(2, 3, [1, 2])
  assert.equal(resultado, [
    [1, 1, 2], 
    [2, 1, 1]
  ],`generarGrilla debería retornar [
    [1, 1, 2], 
    [2, 1, 1]
  ] pero fue ${resultado}`);
})

it("Si hacemos generarGrilla(3, 3, ['a', 'b', 'c']) debería retornar [
    ['c', 'c', 'a'], 
    ['c', 'a', 'a'], 
    ['b', 'a', 'b']
  ]", function(){
  let resultado = generarGrilla(3, 3, ['a', 'b', 'c'])
  assert.equal(resultado, [
    ['c', 'c', 'a'], 
    ['c', 'a', 'a'], 
    ['b', 'a', 'b']
  ],`generarGrilla debería retornar [
    ['c', 'c', 'a'], 
    ['c', 'a', 'a'], 
    ['b', 'a', 'b']
  ] pero fue ${resultado}`);
})