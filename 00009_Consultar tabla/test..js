it("Si hacemos sumar(2, 3) debería retornar 5", function() {
  let resultado = sumar(2,3)
  assert.equal(resultado, 5,`La suma debería retornar 5 pero fue ${resultado}`);
})