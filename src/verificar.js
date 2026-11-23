// Importaciones
const ventas = require("./datos");

const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM
} = require("./analitica");

// Comparaciones 
const resultadoCiclo = totalVendido(ventas);
const resultadoMetodo = totalVendidoM(ventas);

if (resultadoCiclo === resultadoMetodo) {
    console.log("totalVendido: OK");
} else {
    console.log("totalVendido: DIF  ERENTE");
}

const unidadesCiclo = unidadesVendidas(ventas);
const unidadesMetodo = unidadesVendidasM(ventas);

if (unidadesCiclo === unidadesMetodo) {
    console.log("unidadesVendidas: OK");
} else {
    console.log("unidadesVendidas: DIFERENTE");
}

const ventasCiudadCiclo = ventasPorCiudad(ventas, "Medellín");
const ventasCiudadMetodo = ventasPorCiudadM(ventas, "Medellín");

if (ventasCiudadCiclo === ventasCiudadMetodo) {
    console.log("ventasPorCiudad: OK");
} else {
    console.log("ventasPorCiudad: DIFERENTE");
}