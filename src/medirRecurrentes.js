const { generarVentas } = require("./generador");
const { clientesRecurrentes } = require("./analitica");

const tamanos = [1000, 2000, 4000, 8000, 16000];

for (const n of tamanos) {
    const ventas = generarVentas(n);

    console.time(`${n} ventas`);

    clientesRecurrentes(ventas);

    console.timeEnd(`${n} ventas`);
}