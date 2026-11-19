# Café Origen - Analítica

Proyecto desarrollado durante la Sesión 4 de RIWI, enfocado en la resolución de problemas con arreglos, objetos y funciones en JavaScript.

## Objetivo

Construir un motor básico de analítica que permita analizar el historial de ventas de Café Origen y responder preguntas de negocio.

## Tecnologías

- JavaScript
- Node.js
- Git y GitHub

## Estructura del proyecto

- `src/datos.js`: contiene el historial original de las 12 ventas.
- `src/explorar.js`: permite explorar los registros mediante la consola.
- `src/analitica.js`: contiene las seis funciones de análisis y sus pruebas.
- `bitacora.md`: documenta los casos borde, el diccionario de datos, los pseudocódigos, las tablas de traza y los resultados de las pruebas.

## Funcionalidades

El proyecto implementa seis funciones:

| Función | Descripción |
|---|---|
| `valorVenta(venta)` | Calcula el valor total de una venta. |
| `totalVendido(ventas)` | Suma el valor de todas las ventas. |
| `unidadesVendidas(ventas)` | Calcula la cantidad total de unidades vendidas. |
| `ventaMayor(ventas)` | Identifica la venta con mayor valor. |
| `ticketPromedio(ventas)` | Calcula el promedio por venta efectiva. |
| `ventasPorCiudad(ventas, ciudad)` | Calcula el valor vendido en una ciudad determinada. |

## Ejecución

Desde la raíz del proyecto, ejecutar los siguientes comandos.

### Exploración de datos

```bash
node src/explorar.js
```

Este comando muestra la cantidad de registros, el primero, el último, un producto específico y la tabla completa de ventas.

### Analítica de ventas

```bash
node src/analitica.js
```

Este comando ejecuta las pruebas de las seis funciones utilizando el arreglo completo, un arreglo de un solo elemento y un arreglo vacío.

## Resultados principales

| Indicador | Resultado |
|---|---|
| Registros analizados | 12 |
| Total vendido | $985.000 COP |
| Unidades vendidas | 21 |
| Venta de mayor valor | $168.000 COP |
| Ticket promedio | $89.545,45 COP |
| Ventas en Medellín | $356.000 COP |

## Documentación

En `bitacora.md` se encuentran los casos borde identificados, las decisiones tomadas, los pseudocódigos de las funciones, dos tablas de traza y los resultados de las pruebas realizadas.