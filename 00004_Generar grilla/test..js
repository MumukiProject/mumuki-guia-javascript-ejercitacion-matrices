it(`Si hacemos generarGrilla(2, 3, [1, 2]) debería retornar una matriz con 2 filas`, function(){
  let resultado = generarGrilla(2, 3, [1, 2])
  assert.equal(resultado.length, 2),`generarGrilla debería retornar una matriz con 2 filas pero fue ${resultado.length}`);
})

it(`Si hacemos generarGrilla(2, 3, [1, 2]) debería retornar una matriz con 3 columnas`, function(){
  let resultado = generarGrilla(2, 3, [1, 2])
  assert.equal(resultado[0].length,3),`generarGrilla debería retornar una matriz con 3 columnas pero fue ${resultado[0].length}`);
})

it(`Si hacemos generarGrilla(6, 5, [2, 4, 8]) debería retornar una matriz con 6 filas`, function(){
  let resultado = generarGrilla(6, 5, [2, 4, 8])
  assert.equal(resultado.length, 6),`generarGrilla debería retornar una matriz con 6 filas pero fue ${resultado.length}`);
})

it(`Si hacemos generarGrilla(6, 5, [2, 4, 8]) debería retornar una matriz con 5 columnas`, function(){
  let resultado = generarGrilla(6, 5, [2, 4, 8])
  assert.equal(resultado[0].length,5),`generarGrilla debería retornar una matriz con 5 columnas pero fue ${resultado[0].length}`);
})

it(`Si hacemos generarGrilla(8, 7, [2, 5, 7]) 2 veces seguidas debería retornas matrices distintas`, function(){
  let resultado1 = generarGrillagenerarGrilla(8, 7, [2, 5, 7]);
  let resultado2 = generarGrillagenerarGrilla(8, 7, [2, 5, 7]);
  assert.notDeepEqual(resultado1, resultado2);
})

/*
it(`Si hacemos generarGrilla(2, 3, [1, 2]) debería retornar [
    [1, 1, 2], 
    [2, 1, 1]
  ]`, function(){
  let resultado = generarGrilla(2, 3, [1, 2])
  assert.equal(resultado, [
    [1, 1, 2], 
    [2, 1, 1]
  ],`generarGrilla debería retornar [
    [1, 1, 2], 
    [2, 1, 1]
  ] pero fue ${resultado}`);
})

it(`Si hacemos generarGrilla(3, 3, ['a', 'b', 'c']) debería retornar [
    ['c', 'c', 'a'], 
    ['c', 'a', 'a'], 
    ['b', 'a', 'b']
  ]`, function(){
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
})*/