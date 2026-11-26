function generarVentas(n) {
    const ventas = [];
    const ciudades = ["Medellín", "Bogotá", "Cali", "Pereira"];
    const productos = [{producto: "Origen Huila 500 g", precio: 42000}, {producto: "Origen Nariño 250 g", precio: 26000}, {producto: "Prensa francesa", precio: 95000}, {producto: "Origen Sierra 500 g", precio: 45000}, {producto: "Molino manual", precio: 120000}]
    const maxClientes = Math.max(1, Math.floor(n / 3));

    for (let i = 1; i < n + 1; i++) {
        const cantidad = Math.floor(Math.random() * 5) + 1
        const indiceCiudad = Math.floor(Math.random() * ciudades.length)
        const indiceProducto = Math.floor(Math.random() * productos.length)
        const clientesRandom = Math.floor(Math.random() * maxClientes + 1)
        const fechaRandom = Math.floor(Math.random() * 30) + 1
        ventas.push({id: i, cantidad, ciudad: ciudades[indiceCiudad], ...productos[indiceProducto], cliente: "C" + String(clientesRandom).padStart(2, "0"), fecha: "2026-09-" + String(fechaRandom).padStart(2, "0")})
    }

    return ventas;
}

module.exports = {
    generarVentas
}