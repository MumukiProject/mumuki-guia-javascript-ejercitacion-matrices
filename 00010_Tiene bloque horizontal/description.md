> Definí una función `tieneBloqueHorizontal` que tome como argumento un array 2d `matriz` y devuelva `true` si dicha `matriz` tiene un bloque _horizontal_ de 3 o más ítems consecutivos idénticos, o `false` si no tiene.
>
```javascript
ム tieneBloqueHorizontal([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
])
false
>
ム tieneBloqueHorizontal([
  [1, 2, 3, 4],
  [1, 2, 2, 2],
  [1, 2, 4, 5],
])
true
```