let name = window.prompt('Ingrece su nombre porfavor');

const destino = window.prompt('Ingrese su destino');

let duracion = window.prompt('¿cuantos dias tendra su viaje?'); // cambian

let presupuesto = window.prompt('¿cual es su presupuesto?'); //cambian

console.log(destino, duracion, presupuesto);

let valor_dia = 2000000;
let gasto_real = valor_dia * duracion;
let total = presupuesto - gasto_real;

total < 0
  ? console.log(`${name} por favor ajusta tu presupuesto`)
  : console.log(`${name} tu presupuesto alcanza`);

if (total < 0) {
  duracion = window.prompt('¿cuantos dias tendra su viaje?');
  presupuesto = window.prompt('¿cual es su presupuesto?');
}

//primer souvenir
let name_1 = prompt('Introduzca el nombre:');

let costo = Number(prompt('introduzca el valor'));

let disponible = confirm('¿esta disponibles');

// verificación de datos

if (typeof name_1 !== typeof String(name_1)) {
  name_1 = prompt('Introduzca el nombre:');
  console.log('aqui');
}

if (typeof costo !== typeof Number(costo)) {
  costo = prompt('introduzca el valor');
  console.log('aqui');
}

if (disponible == true) {
  disponible = 'si';
} else {
  disponible = 'No';
}

let list = { name_1, costo, disponible };

console.log(list);

//segundo souvenir

let name_2 = prompt('Introduzca el nombre:');

let costo_1 = Number(prompt('introduzca el valor'));

let disponible_1 = confirm('¿esta disponibles');

//estructura de control

if (typeof name_2 !== typeof String(name_2)) {
  name_2 = prompt('Introduzca el nombre:');
}

if (typeof costo_1 !== typeof Number(costo_1)) {
  costo = prompt('introduzca el valor');
}

if (disponible_1 == true) {
  disponible_1 = 'si';
} else {
  disponible_1 = 'No';
}

let list_1 = { name_2, costo_1, disponible_1 };

console.log(list_1);

let global_list = { list, list_1 };
console.log(global_list);
