it("Si hacemos obtenerCantidad('🍎', [
  ['🍎', '🍏', '🍌', '🍌'],
  ['🍌', '🍎'],
  ['🍎', '🍏', '🍌'],
  ['🍏', '🍌', '🍎', '🍌'],
]) debería retornar 5", function() {
  let resultado = obtenerCantidad('🍎', [
  ['🍎', '🍏', '🍌', '🍌'],
  ['🍌', '🍎'],
  ['🍎', '🍏', '🍌'],
  ['🍏', '🍌', '🍎', '🍌'],
])
  assert.equal(resultado, 4,`obtenerCantidad debería retornar 54 pero fue ${resultado}`);
})