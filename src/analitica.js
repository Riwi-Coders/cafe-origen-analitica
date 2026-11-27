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

function ventasDelDia(ventas, fecha) {
    const ventaFecha = ventas.filter((venta) => venta.fecha === fecha);

    return ventaFecha;
}

//Funciones para mediciones

function totalVendidoMedido(ventas, contador) {
    let total = 0;

    for (const venta of ventas) {
        contador.operaciones++
        total += valorVenta(venta);
    }

    return total;
}

function ventaMayorMedido(ventas, contador) {
    if (ventas.length === 0) {
        return null;
    }

    let mayor = ventas[0];

    for (const venta of ventas) {
        contador.operaciones++

        contador.operaciones++
        if (valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }

    return mayor;
}

function totalPorCiudadMedido(ventas, contador) {
    const totales = ventas.reduce((acumulador, venta) => {
        contador.operaciones++

        const ciudadMinuscula = venta.ciudad.trim().toLowerCase();
        const ciudad = ciudadMinuscula.charAt(0).toUpperCase() + ciudadMinuscula.slice(1);

        contador.operaciones++
        if (acumulador[ciudad] === undefined) {
            acumulador[ciudad] = 0;
        }

        acumulador[ciudad] += valorVenta(venta);

        return acumulador;
    }, {});

    return totales;
}

function primeraVenta(ventas) {
    if (ventas.length === 0){
        return null
    }
    return ventas[0]
}

function primeraVentaMedido(ventas, contador) {
    if (ventas.length === 0){
        return null
    }

    contador.operaciones++
    return ventas[0]
}

// Funcion de Moodle
function clientesRecurrentes(ventas) {
    const recurrentes = [];

    for (let i = 0; i < ventas.length; i++) {
        for (let j = i + 1; j < ventas.length; j++) {
            if (ventas[i].cliente === ventas[j].cliente &&
                !recurrentes.includes(ventas[i].cliente)) {
                recurrentes.push(ventas[i].cliente);
            }
        }
    }

    return recurrentes;
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
    console.log(ventasDelDia(ventas, "2026-09-01"));
    console.log(ventasDelDia(ventas, "2026-01-01"));
    const pruebaCiudades = [
        { ciudad: "Bogotá", cantidad: 1, precio: 26000 },
        { ciudad: "Bogotá ", cantidad: 1, precio: 26000 },
        { ciudad: "bogotá", cantidad: 1, precio: 26000 }
    ];

    console.log(totalPorCiudad(pruebaCiudades));
        console.log("---Mediciones---")
    const contador = {operaciones: 0}
    console.log(totalVendidoMedido(ventas, contador))
    console.log(contador)

    const contadorVentaMayor = {operaciones: 0}
    console.log(ventaMayorMedido(ventas, contadorVentaMayor))
    console.log(contadorVentaMayor)

    const contadorCiudad = { operaciones: 0 }
    console.log(totalPorCiudadMedido(ventas, contadorCiudad))
    console.log(contadorCiudad)

    //Funcion Moodle
    const ventasFuncionMoodle = [
        { id: 1, cliente: "C01" },
        { id: 2, cliente: "C02" },
        { id: 3, cliente: "C01" },
        { id: 4, cliente: "C03" },
        { id: 5, cliente: "C02" }
    ];
    console.log("---Funcion del Moodle---")
    console.log(clientesRecurrentes(ventasFuncionMoodle));
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
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia,
    totalVendidoMedido,
    ventaMayorMedido,
    totalPorCiudadMedido,
    primeraVentaMedido,
    clientesRecurrentes
};