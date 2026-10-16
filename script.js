const productos = [
  { nombre: "Polo TECSUP", precio: 25.00, cantidad: 2 },
  { nombre: "Taza TECSUP", precio: 18.00, cantidad: 1 }
];

function calcularTotal(lista) {
  let total = 0;
  for (const producto of lista) {
    total = total + producto.precio;
  }
  return total;
}

function mostrarCarrito(lista) {
  const cuerpo = document.getElementById("carrito");
  for (const producto of lista) {
    const fila = document.createElement("tr");
    fila.innerHTML =
      "<td>" + producto.nombre + "</td>" +
      "<td>S/ " + producto.precio.toFixed(2) + "</td>" +
      "<td>" + producto.cantidad + "</td>" +
      "<td>S/ " + (producto.precio * producto.cantidad).toFixed(2) + "</td>";
    cuerpo.appendChild(fila);
  }
}

mostrarCarrito(productos);
document.getElementById("total").textContent =
  "S/ " + calcularTotal(productos).toFixed(2);
