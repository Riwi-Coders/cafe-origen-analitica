const { generarVentas } = require("./generador");

const {
    totalVendidoMedido,
    ventaMayorMedido,
    totalPorCiudadMedido,
    primeraVentaMedido
} = require("./analitica");

const tamanos = [100, 1000, 10000, 100000];

const resultados = []

for (const elemento of tamanos) {
    const ventas = generarVentas(elemento);

    const contadorVendido = { operaciones: 0 };
    const contadorMayor = { operaciones: 0 };
    const contadorCiudad = { operaciones: 0 };
    const contadorPrimera = {operaciones: 0};

    totalVendidoMedido(ventas, contadorVendido)
    ventaMayorMedido(ventas, contadorMayor)
    totalPorCiudadMedido(ventas, contadorCiudad)
    primeraVentaMedido(ventas, contadorPrimera)

    const medicion = {
        n: elemento,
        totalVendido: contadorVendido.operaciones,
        ventaMayor: contadorMayor.operaciones,
        totalPorCiudad: contadorCiudad.operaciones,
        totalPrimera: contadorPrimera.operaciones
    };

    resultados.push(medicion);
}

console.table(resultados)