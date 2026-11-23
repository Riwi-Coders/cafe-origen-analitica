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

// Funciones con metodos
function totalVendidoM(ventas) {
    const valores = ventas.map((venta) => {
        return valorVenta(venta);
    });

    const total = valores.reduce((acumulador, venta) => {
        return acumulador + venta;
    }, 0);

    return total;
}

function unidadesVendidasM(ventas) {
    const unidades = ventas.map((venta) => {
        return venta.cantidad;
    });

    const totalUnidades = unidades.reduce((acumulador, unidad) => {
        return acumulador + unidad;
    }, 0);

    return totalUnidades;
}

function ventasPorCiudadM(ventas, ciudad) {
    const ciudadBuscada = ciudad.trim().toLowerCase();

    const total = ventas
        .filter((venta) => venta.ciudad.trim().toLowerCase() === ciudadBuscada)
        .reduce((acumulador, venta) => {
            return acumulador + valorVenta(venta);
        }, 0);

    return total;
}

function totalPorCiudad(ventas) {
    const totales = ventas.reduce((acumulador, venta) => {
        const ciudadMinuscula = venta.ciudad.trim().toLowerCase();

        const ciudad = ciudadMinuscula.charAt(0).toUpperCase() + ciudadMinuscula.slice(1);

        if (acumulador[ciudad] === undefined) {
            acumulador[ciudad] = 0;
        }

        acumulador[ciudad] += valorVenta(venta);

        return acumulador;
    }, {});

    return totales;
}

function unidadesPorProducto(ventas) {
    const totales = ventas.reduce((acumulador, venta) => {
        const producto = venta.producto;

        if (acumulador[producto] === undefined){
            acumulador[producto] = 0;
        }

        acumulador[producto] += venta.cantidad;

        return acumulador;
    }, {});

    return totales;
}

function topProductosPorValor(ventas, k) {
    const topProductos = ventas.reduce((acumulador, venta) => {
        const producto = venta.producto;

        if (acumulador[producto] === undefined) {
            acumulador[producto] = 0;
        }

        acumulador[producto] += valorVenta(venta);

        return acumulador;
    }, {});

    const productos = Object.entries(topProductos);

    productos.sort((a, b) => b[1] - a[1]);

    const resultado = productos.slice(0, k);

    return resultado;
}

if (require.main === module) {
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

    // Pruebas con un arreglo vacío
    console.log(totalVendido([]));
    console.log(unidadesVendidas([]));
    console.log(ventaMayor([]));
    console.log(ticketPromedio([]));
    console.log(ventasPorCiudad([], "Medellín"));

    // Pruebas de funciones con métodos
    console.log("Total vendido con métodos:", totalVendidoM(ventas));
    console.log("Total vendido con ciclo:", totalVendido(ventas));
    console.log("Total de unidades vendidas con métodos:", unidadesVendidasM(ventas));
    console.log("Total de unidades vendidas con ciclo:", unidadesVendidas(ventas));
    console.log("Total de ventas por ciudad con método:", ventasPorCiudadM(ventas, "Medellín"));
    console.log("Total de ventas por ciudad con ciclo:", ventasPorCiudad(ventas, "medellín"));
    console.log(totalPorCiudad(ventas));
    console.log("Unidades por producto:", unidadesPorProducto(ventas));
    console.log(topProductosPorValor(ventas, 3));
}

// Exportaciones
module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto
};