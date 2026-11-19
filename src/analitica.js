const ventas = require("./datos");

function valorVenta(venta) {
    const subtotal = venta.cantidad * venta.precio;
    return subtotal;
}

function totalVendido(ventas) {
    let total = 0;

    for (const venta of ventas) {
        total = total + valorVenta(venta);
    }

    return total;
}

function unidadesVendidas(ventas) {
    let total = 0;

    for (const venta of ventas) {
        total = total + venta.cantidad;
    }

    return total;
}

function ventaMayor(ventas) {
    if (ventas.length === 0) {
        return null;
    }

    let mayor = ventas[0];

    for (const venta of ventas) {
        if (valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }

    return mayor;
}

function ticketPromedio(ventas) {
    let contador = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            contador++;
        }
    }

    if (contador === 0) {
        return null;
    }

    let ticketPromedio = totalVendido(ventas) / contador;

    return ticketPromedio;
}

function ventasPorCiudad(ventas, ciudad) {
    let total = 0;
    let ciudadBuscada = ciudad.trim().toLowerCase();

    for (const venta of ventas) {
        let ciudades = venta.ciudad.trim().toLowerCase();

        if (ciudades === ciudadBuscada) {
            total = total + valorVenta(venta);
        }
    }

    return total;
}

// Pruebas con el arreglo completo
console.log(valorVenta(ventas[0]));
console.log(totalVendido(ventas));
console.log(unidadesVendidas(ventas));
console.log(ventaMayor(ventas));
console.log(ticketPromedio(ventas));
console.log(ventasPorCiudad(ventas, "Medellín"));

// Pruebas con un solo elemento
console.log(totalVendido([ventas[0]]));
console.log(unidadesVendidas([ventas[0]]));
console.log(ventaMayor([ventas[0]]));
console.log(ticketPromedio([ventas[0]]));
console.log(ventasPorCiudad([ventas[0]], "Medellín"));

// Pruebas con un arreglo vacio
console.log(totalVendido([]));
console.log(unidadesVendidas([]));
console.log(ventaMayor([]));
console.log(ticketPromedio([]));
console.log(ventasPorCiudad([], "Medellín"));

// Exportaciones
module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
};