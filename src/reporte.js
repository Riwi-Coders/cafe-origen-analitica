const ventas = require("./datos");

const {
    totalVendido,
    unidadesVendidas,
    ticketPromedio,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia
} = require("./analitica");

console.log("==================================");
console.log("       CAFÉ ORIGEN — v0.1         ");
console.log("==================================");
console.log("\n--- RESUMEN GENERAL ---");

const total = totalVendido(ventas);

console.log(`Total vendido: $${total.toLocaleString("es-CO")} COP`);

const unidades = unidadesVendidas(ventas);

console.log(`Unidades vendidas: ${unidades}`);

const promedio = ticketPromedio(ventas);

console.log(`Ticket promedio: $${promedio.toLocaleString("es-CO")} COP`);

console.log("\n--- VENTAS POR CIUDAD ---");

const ciudades = totalPorCiudad(ventas);

const ciudadesFormateadas = {};

for (const ciudad in ciudades) {
    ciudadesFormateadas[ciudad] = `$${ciudades[ciudad].toLocaleString("es-CO")} COP`;
}

console.table(ciudadesFormateadas);

console.log("\n--- UNIDADES POR PRODUCTO ---");

const productos = unidadesPorProducto(ventas);

console.table(productos);

console.log("\n--- TOP 3 PRODUCTOS POR INGRESOS ---");

const top3 = topProductosPorValor(ventas, 3);

const top3Formateado = top3.map((producto) => {
    return {
        Producto: producto[0],
        Ingresos: `$${producto[1].toLocaleString("es-CO")} COP`
    };
});

console.table(top3Formateado);

function mostrarResumenDia(fecha) {
    console.log(`\n--- RESUMEN DEL DÍA ${fecha} ---`);

    const ventasDia = ventasDelDia(ventas, fecha);

    console.log(`Total vendido: $${totalVendido(ventasDia).toLocaleString("es-CO")} COP`);
    console.log(`Unidades vendidas: ${unidadesVendidas(ventasDia)}`);

    const promedioDia = ticketPromedio(ventasDia);

    if (promedioDia === null) {
        console.log("Ticket promedio: No hay ventas efectivas");
    } else {
        console.log(`Ticket promedio: $${promedioDia.toLocaleString("es-CO")} COP`);
    }
}

mostrarResumenDia("2026-09-01");
mostrarResumenDia("2026-01-01");