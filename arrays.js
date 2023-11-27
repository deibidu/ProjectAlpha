/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
  { product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3},
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]
let totalPrice = 0;
shoppingCart.forEach(function(product, index) {
    totalPrice += product.price * product.quantity;
});

console.log(totalPrice);

/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. A continuación filtra el array para mostrar todas las 
  tareas que están completadas y luego todas las tareas que están pendientes.
*/
const tasks = [
    { id: 1, descripcion: 'tarea 1', completed: true},
    { id: 2, descripcion: 'tarea 2', completed: false},
    { id: 3, descripcion: 'tarea 3', completed: true}
]
const tasks1 = [
  { id: 1, descripcion: 'tarea 1', status: completed},
  { id: 2, descripcion: 'tarea 2', status: pending},
  { id: 3, descripcion: 'tarea 3', status: completed}
]
const completedTask = tasks.filter(function(task) {
    return task.completed;
});

const pendingTask = tasks.filter(function(task) {
  return !task.completed;
});

const completedWithStatus = tasks1.filter(function(task) {
  return task.status === 'completed';
});

const pendingWithStatus = tasks1.filter(function(task) {
return !task.status === 'pending';
});


/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const fruits = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandía'];

const frutas = [
    {arbol : 'manzana'},
    {arbol : 'pera'},
    {arbol: 'granada'},
    {arbol: 'platano'},
    {tierra: 'uva'},
    {tierra: 'melón'},
    {tierra: 'sandía'}
];

const arbolesFrutales = frutas.map(arboles => {
    return arboles.arbol;
});
console.log(arbolesFrutales);
/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/
const cestaCompra = [
    { product: 'Red wine', price: 20, quantity: 1},
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3},
    { product: 'Tiramisú', price: 5.99, quantity: 2 }
  ]
const cestaCompraIVA = cestaCompra.map(iva => {
    return iva.price * 1.1;
})
 console.log(cestaCompraIVA);
/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/
const shoppingCart2 = [
    { product: 'Red wine', price: 20, quantity: 1},
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3},
    { product: 'Tiramisú', price: 5.99, quantity: 2 }
  ]
  const compra = shoppingCart2.map(comprado => {
    return comprado.quantity - 1;
  })
  console.log(compra);