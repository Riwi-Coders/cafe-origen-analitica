# Café Origen - Analítica v0.1

Proyecto desarrollado en RIWI, enfocado en la resolución de problemas con arreglos, objetos, funciones y métodos de JavaScript.

## Objetivo

Construir un motor básico de analítica que permita analizar el historial de ventas de Café Origen y responder preguntas de negocio mediante un reporte por consola.

## Tecnologías

- JavaScript
- Node.js
- Git y GitHub

## Estructura del proyecto

- `src/datos.js`: contiene el historial original de las 12 ventas.
- `src/explorar.js`: permite explorar los registros mediante la consola.
- `src/analitica.js`: contiene las funciones de análisis con ciclos y métodos de arreglos.
- `src/verificar.js`: compara los resultados de las funciones equivalentes.
- `src/reporte.js`: presenta el reporte de negocio con valores en pesos colombianos.
- `bitacora.md`: documenta el diccionario de datos, casos borde, pseudocódigos, tablas de traza, pruebas y depuración.

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

### MiniReto 4 — Reporte y depuración

| Función | Descripción |
|---|---|
| `ventasDelDia()` | Filtra las ventas de una fecha específica. |
| `mostrarResumenDia()` | Presenta el resumen de ventas de una fecha. |

El reporte incluye formato monetario colombiano, normalización de ciudades y manejo de días sin ventas efectivas.

## Ejecución

Requisitos: tener Node.js instalado.

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

**Ejecutar el reporte de negocio:**

```bash
node src/reporte.js
```

## Preguntas de negocio

- ¿Cuánto dinero se ha vendido?
- ¿Cuántas unidades se han vendido?
- ¿Cuál es la venta de mayor valor?
- ¿Cuál es el ticket promedio?
- ¿Cuánto dinero se vende por ciudad?
- ¿Cuántas unidades se venden por producto?
- ¿Cuáles son los tres productos con mayores ingresos?
- ¿Cuáles son los resultados de ventas de una fecha específica?

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

## Depuración

Se realizaron pruebas para comprobar que:

- Las diferencias de mayúsculas y espacios no generan ciudades duplicadas.
- Los días sin ventas efectivas no generan resultados `NaN` en el ticket promedio.

## Documentación

El archivo `bitacora.md` contiene el diccionario de datos, los casos borde, las decisiones tomadas, los pseudocódigos, las tablas de traza, los resultados de las pruebas y el registro de depuración de la versión v0.1.

