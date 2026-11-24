# Bitácora — Café Origen Analítica

## MiniReto 1 — Exploración de datos

### Casos borde detectados

#### 1. Inconsistencia en el nombre de una ciudad

En el índice 4 del arreglo, la ciudad aparece escrita como `"medellín"` en lugar de `"Medellín"`.

**Decisión:** Conservar los datos originales, pero convertir los nombres de las ciudades a minúsculas y eliminar los espacios al principio y al final al momento de compararlos. De esta manera, `"Medellín"` y `"medellín"` se reconocen como la misma ciudad. La normalización de tildes queda como una posible mejora futura.

#### 2. Venta con cantidad igual a cero

En el índice 7 del arreglo (venta con `id: 8`), encontramos un producto con `cantidad: 0`. Considero que es un dato sospechoso, ya que no representa una compra efectiva.

**Decisión:** Mantener el registro original. Como su cantidad es cero, no aporta unidades ni ingresos al total vendido. Además, no se cuenta como venta efectiva para calcular el ticket promedio.

#### 3. Clientes repetidos

Un mismo cliente puede aparecer en varios registros porque ha realizado compras en diferentes momentos. Por ejemplo, el cliente `C01` aparece en tres ventas distintas.

Esto no representa un error, pero podría generar resultados incorrectos si queremos conocer la cantidad de clientes únicos.

**Decisión:** Conservar todas las compras realizadas, pero contar cada cliente una sola vez cuando se necesite calcular la cantidad de clientes únicos.

### Diccionario de datos

El historial de ventas está representado mediante un arreglo de objetos llamado `ventas`. Cada objeto corresponde a un registro de venta y contiene siete propiedades.

| Propiedad | Tipo de dato | Descripción |
|---|---|---|
| `id` | number | Identificador único de cada venta. |
| `fecha` | string | Fecha de la venta en formato AAAA-MM-DD. |
| `cliente` | string | Código que identifica al cliente que realizó la compra. |
| `producto` | string | Nombre del producto vendido. |
| `ciudad` | string | Ciudad donde se registró la venta. |
| `cantidad` | number | Número de unidades del producto registradas en la venta. |
| `precio` | number | Precio por unidad del producto, expresado en pesos colombianos (COP). |

---

# MiniReto 2 — Analítica de ventas

## 1. Pseudocódigo de las funciones

### valorVenta(venta)

    INICIO
        subtotal ← venta.cantidad * venta.precio
        RETORNAR subtotal
    FIN

### totalVendido(ventas)

    INICIO
        total ← 0

        PARA CADA venta EN ventas
            total ← total + valorVenta(venta)
        FIN PARA

        RETORNAR total
    FIN

### unidadesVendidas(ventas)

    INICIO
        total ← 0

        PARA CADA venta EN ventas
            total ← total + venta.cantidad
        FIN PARA

        RETORNAR total
    FIN

### ventaMayor(ventas)

    INICIO
        SI ventas está vacío ENTONCES
            RETORNAR null
        FIN SI

        mayor ← primera venta del arreglo

        PARA CADA venta EN ventas
            SI valorVenta(venta) > valorVenta(mayor) ENTONCES
                mayor ← venta
            FIN SI
        FIN PARA

        RETORNAR mayor
    FIN

### ticketPromedio(ventas)

    INICIO
        contador ← 0

        PARA CADA venta EN ventas
            SI venta.cantidad > 0 ENTONCES
                contador ← contador + 1
            FIN SI
        FIN PARA

        SI contador = 0 ENTONCES
            RETORNAR null
        FIN SI

        promedio ← totalVendido(ventas) / contador

        RETORNAR promedio
    FIN

### ventasPorCiudad(ventas, ciudad)

    INICIO
        total ← 0
        ciudadBuscada ← convertir ciudad a minúsculas y quitar espacios extremos

        PARA CADA venta EN ventas
            ciudadActual ← convertir venta.ciudad a minúsculas y quitar espacios extremos

            SI ciudadActual = ciudadBuscada ENTONCES
                total ← total + valorVenta(venta)
            FIN SI
        FIN PARA

        RETORNAR total
    FIN

## 2. Tablas de traza

### Tabla 1 — totalVendido(ventas)

Esta tabla representa cómo se acumula el valor de las 12 ventas mediante la función `valorVenta()`.

| Iteración | ID de venta | Valor de venta (COP) | Total acumulado (COP) |
|---|---|---|---|
| Inicial | — | — | 0 |
| 1 | 1 | 84000 | 84000 |
| 2 | 2 | 26000 | 110000 |
| 3 | 3 | 95000 | 205000 |
| 4 | 4 | 42000 | 247000 |
| 5 | 5 | 135000 | 382000 |
| 6 | 6 | 52000 | 434000 |
| 7 | 7 | 120000 | 554000 |
| 8 | 8 | 0 | 554000 |
| 9 | 9 | 90000 | 644000 |
| 10 | 10 | 168000 | 812000 |
| 11 | 11 | 95000 | 907000 |
| 12 | 12 | 78000 | 985000 |

**Resultado:** La función retorna `985000` COP.

**Observación:** La venta con `id: 8` no incrementa el acumulador porque su cantidad es cero.

### Tabla 2 — ventaMayor(ventas)

Esta tabla muestra cómo cambia la variable `mayor` al comparar el valor de cada venta con el máximo encontrado hasta ese momento.

| Iteración | ID evaluado | Valor evaluado (COP) | ID de mayor | Valor máximo (COP) |
|---|---|---|---|---|
| Inicial | — | — | 1 | 84000 |
| 1 | 1 | 84000 | 1 | 84000 |
| 2 | 2 | 26000 | 1 | 84000 |
| 3 | 3 | 95000 | 3 | 95000 |
| 4 | 4 | 42000 | 3 | 95000 |
| 5 | 5 | 135000 | 5 | 135000 |
| 6 | 6 | 52000 | 5 | 135000 |
| 7 | 7 | 120000 | 5 | 135000 |
| 8 | 8 | 0 | 5 | 135000 |
| 9 | 9 | 90000 | 5 | 135000 |
| 10 | 10 | 168000 | 10 | 168000 |
| 11 | 11 | 95000 | 10 | 168000 |
| 12 | 12 | 78000 | 10 | 168000 |

**Resultado:** La función retorna el objeto completo de la venta con `id: 10`, correspondiente a cuatro unidades de `Origen Huila 500 g`, por un valor total de `168000` COP.

**Observación:** La variable `mayor` solo cambia cuando encuentra una venta cuyo valor supera al máximo anterior.

## 3. Resultados de las pruebas

Se realizaron pruebas con el arreglo completo de 12 registros, un arreglo con un solo elemento y un arreglo vacío.

### Arreglo completo

| Función | Resultado |
|---|---|
| `valorVenta(ventas[0])` | 84000 |
| `totalVendido(ventas)` | 985000 |
| `unidadesVendidas(ventas)` | 21 |
| `ventaMayor(ventas)` | Objeto de la venta con `id: 10` |
| `ticketPromedio(ventas)` | 89545.45454545454 |
| `ventasPorCiudad(ventas, "Medellín")` | 356000 |

### Arreglo con un solo elemento

Se utiliza `[ventas[0]]`, que contiene únicamente el registro de la primera venta.

| Función | Resultado |
|---|---|
| `totalVendido([ventas[0]])` | 84000 |
| `unidadesVendidas([ventas[0]])` | 2 |
| `ventaMayor([ventas[0]])` | Objeto de la venta con `id: 1` |
| `ticketPromedio([ventas[0]])` | 84000 |
| `ventasPorCiudad([ventas[0]], "Medellín")` | 84000 |

### Arreglo vacío

| Función | Resultado |
|---|---|
| `totalVendido([])` | 0 |
| `unidadesVendidas([])` | 0 |
| `ventaMayor([])` | null |
| `ticketPromedio([])` | null |
| `ventasPorCiudad([], "Medellín")` | 0 |

La función `valorVenta()` recibe un objeto individual y no un arreglo, por lo que se prueba directamente con un registro de venta.

### Conclusiones

Las seis funciones permiten analizar los registros de Café Origen utilizando ciclos, condicionales, acumuladores y funciones reutilizables.

Las pruebas confirman que:

- Los acumuladores retornan `0` cuando reciben un arreglo vacío.
- `ventaMayor()` retorna `null` cuando no existe ninguna venta para comparar.
- `ticketPromedio()` retorna `null` cuando no existen ventas con cantidad mayor que cero, evitando dividir entre cero.
- `ventasPorCiudad()` compara los nombres de las ciudades sin distinguir mayúsculas y minúsculas, y elimina espacios extremos.
- Los registros originales se conservan sin modificar sus valores.

# MiniReto 3 — Métodos de arreglos

## 1. Análisis de las funciones

| Función | ¿Qué recorro? | ¿Qué filtro? | ¿Qué transformo? | ¿Qué acumulo? | ¿Cómo agrupo? |
|---|---|---|---|---|---|
| `totalVendidoM()` | Ventas | — | Ventas a valores monetarios | Ingresos | — |
| `unidadesVendidasM()` | Ventas | — | Ventas a cantidades | Unidades | — |
| `ventasPorCiudadM()` | Ventas | Por ciudad | Normalizo el nombre de la ciudad | Ingresos | — |
| `totalPorCiudad()` | Ventas | — | Normalizo ciudades | Ingresos | Por ciudad |
| `unidadesPorProducto()` | Ventas | — | — | Unidades | Por producto |
| `topProductosPorValor()` | Ventas | — | Objeto a arreglo | Ingresos | Por producto |

## 2. Verificación

Se compararon las funciones desarrolladas con ciclos y sus equivalentes con métodos de arreglos mediante `src/verificar.js`.

- `totalVendido()` vs. `totalVendidoM()`: **OK**
- `unidadesVendidas()` vs. `unidadesVendidasM()`: **OK**
- `ventasPorCiudad()` vs. `ventasPorCiudadM()`: **OK**

## 3. Conclusión

Aprendí a utilizar `map()`, `filter()` y `reduce()` para transformar, filtrar y acumular datos. También utilicé objetos para agrupar ventas, `Object.entries()` para convertirlos en arreglos, `sort()` para ordenarlos y `slice()` para seleccionar los primeros resultados.

El arreglo original de ventas no se modificó.

## MiniReto 4 — Reporte y depuración

### Error 1: Ciudades duplicadas

- **Síntoma:** Bogotá aparece más de una vez.
- **Entrada:** `"Bogotá"`, `"Bogotá "` y `"bogotá"`.
- **Hipótesis:** Diferencias de escritura generan claves distintas.
- **Prueba:** Agrupar tres ventas de $26.000 con las variantes anteriores.
- **Causa probable:** Falta de normalización de las ciudades.
- **Corrección:** Utilizar `trim()` y `toLowerCase()`.
- **Resultado:** Una sola Bogotá con $78.000.

### Error 2: Ticket promedio NaN

- **Síntoma:** El ticket promedio muestra `NaN`.
- **Entrada:** Fecha sin ventas (`2026-01-01`).
- **Hipótesis:** División entre cero.
- **Prueba:** Calcular el ticket promedio de un arreglo vacío.
- **Causa probable:** Operación `0 / 0`.## MiniReto 4 — Reporte y depuración

### Error 1: Ciudades duplicadas

- **Síntoma:** Bogotá aparece más de una vez.
- **Entrada:** `"Bogotá"`, `"Bogotá "` y `"bogotá"`.
- **Hipótesis:** Diferencias de escritura generan claves distintas.
- **Prueba:** Agrupar tres ventas de $26.000 con las variantes anteriores.
- **Causa probable:** Falta de normalización de las ciudades.
- **Corrección:** Utilizar `trim()` y `toLowerCase()`.
- **Resultado:** Una sola Bogotá con $78.000.

### Error 2: Ticket promedio NaN

- **Síntoma:** El ticket promedio muestra `NaN`.
- **Entrada:** Fecha sin ventas (`2026-01-01`).
- **Hipótesis:** División entre cero.
- **Prueba:** Calcular el ticket promedio de un arreglo vacío.
- **Causa probable:** Operación `0 / 0`.
- **Corrección:** Retornar `null` cuando no existen ventas efectivas y controlar el resultado en el reporte.
- **Resultado:** Se muestra "No hay ventas efectivas".

### Conclusión

Las pruebas demuestran que la versión actual previene ambos errores en los casos evaluados. También se refactorizó el resumen por fecha para evitar código repetido.
- **Corrección:** Retornar `null` cuando no existen ventas efectivas y controlar el resultado en el reporte.
- **Resultado:** Se muestra "No hay ventas efectivas".

### Conclusión

Las pruebas demuestran que la versión actual previene ambos errores en los casos evaluados. También se refactorizó el resumen por fecha para evitar código repetido.