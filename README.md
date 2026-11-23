# Café Origen - Analítica

Proyecto desarrollado en RIWI, enfocado en la resolución de problemas con arreglos, objetos, funciones y métodos de JavaScript.

## Objetivo

Construir un motor básico de analítica que permita analizar el historial de ventas de Café Origen y responder preguntas de negocio.

## Tecnologías

- JavaScript
- Node.js
- Git y GitHub

## Estructura del proyecto

- `src/datos.js`: contiene el historial original de las 12 ventas.
- `src/explorar.js`: permite explorar los registros mediante la consola.
- `src/analitica.js`: contiene las funciones de análisis con ciclos y métodos de arreglos.
- `src/verificar.js`: compara los resultados de las funciones equivalentes.
- `bitacora.md`: documenta los casos borde, pseudocódigos, tablas de traza, pruebas y análisis de las funciones.

## Funcionalidades

### MiniReto 2 — Analítica con ciclos

| Función | Descripción |
|---|---|
| `valorVenta()` | Calcula el valor de una venta. |
| `totalVendido()` | Suma los ingresos de todas las ventas. |
| `unidadesVendidas()` | Calcula las unidades vendidas. |
| `ventaMayor()` | Identifica la venta de mayor valor. |
| `ticketPromedio()` | Calcula el promedio por venta efectiva. |
| `ventasPorCiudad()` | Calcula los ingresos de una ciudad. |

### MiniReto 3 — Métodos de arreglos

| Función | Descripción |
|---|---|
| `totalVendidoM()` | Calcula los ingresos utilizando `map()` y `reduce()`. |
| `unidadesVendidasM()` | Suma las unidades mediante métodos de arreglos. |
| `ventasPorCiudadM()` | Filtra y suma las ventas de una ciudad. |
| `totalPorCiudad()` | Agrupa los ingresos por ciudad. |
| `unidadesPorProducto()` | Agrupa las unidades vendidas por producto. |
| `topProductosPorValor()` | Obtiene los productos con mayores ingresos. |

## Ejecución

Desde la raíz del proyecto:

**Explorar los datos:**

```bash
node src/explorar.js
```

**Ejecutar la analítica:**

```bash
node src/analitica.js
```

**Verificar las funciones:**

```bash
node src/verificar.js
```

El verificador compara las funciones con ciclos y métodos, mostrando `OK` cuando sus resultados coinciden.

## Resultados principales

| Indicador | Resultado |
|---|---|
| Registros analizados | 12 |
| Total vendido | $985.000 COP |
| Unidades vendidas | 21 |
| Venta de mayor valor | $168.000 COP |
| Ticket promedio | $89.545,45 COP |
| Ciudad con mayores ingresos | Medellín — $356.000 COP |
| Producto con mayores ingresos | Origen Huila 500 g — $294.000 COP |

## Documentación

El archivo `bitacora.md` contiene los casos borde, las decisiones tomadas, los pseudocódigos, las tablas de traza, los resultados de las pruebas y el análisis de las cinco preguntas aplicado a las funciones del MiniReto 3.