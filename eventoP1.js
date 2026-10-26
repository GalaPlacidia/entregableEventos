let listaCompra = ['leche', 'pan', 'huevos'];
let lista = document.getElementById('lista');
let contar = document.getElementById('contador');
let contador = 0;
let buscar = document.getElementById('buscador');
let producto = document.getElementById('input-producto');
let orden = document.getElementById('btn-ordenar');

recorrerLista(listaCompra);
//1
function recorrerLista(listaCompra) {
  lista.textContent = '';
  listaCompra.forEach((elemento) => {
    let lis = document.createElement('li');
    lis.textContent = elemento;
    lista.appendChild(lis);
  });

  contador = listaCompra.length;

  if (contador == 0) {
    contar.textContent = 'La lista está vacía ';
  }
  if (contador == 1) {
    contar.textContent = 'Tienes 1 producto en la lista ';
  } else {
    contar.textContent = 'Tienes ' + contador + ' productos en la lista ';
  }
}

//2

let añado = document.getElementById('btn-agregar');
let elimino = document.getElementById('btn-eliminar');

añado.addEventListener('click', () => {
  let productoValor = producto.value.trim();

  if (listaCompra.includes(productoValor)) {
    alert('El producto ya está en la lista');
    return;
  }

  if (productoValor != '') {
    listaCompra.push(productoValor);
  }

  producto.value = '';
  recorrerLista(listaCompra);
});

elimino.addEventListener('click', () => {
  listaCompra.pop();
  recorrerLista(listaCompra);
});

//4

buscar.addEventListener('input', () => {
  let listaCompraMay = listaCompra.map(function (palabra) {
    return palabra.toLowerCase();
  });

  let buscarValue = buscar.value.toLowerCase();

  if (listaCompraMay.includes(buscarValue)) {
    lista.textContent = '';
    lista.textContent = buscar.value;
  }

  if (buscar.value.trim() == '') {
    recorrerLista(listaCompra);
  }
});

//5

lista.addEventListener('click', (event) => {
  let posicion = listaCompra.indexOf(event.target.value);
  let quitado = listaCompra.splice(posicion, 1);

  recorrerLista(listaCompra);
});

//6

orden.addEventListener('click', () => {
  listaCompra.sort((a, b) => a.localeCompare(b, 'es'));
  recorrerLista(listaCompra);
});
