# Casos borde detectados

### 1. Inconsistencia en el nombre de una ciudad

En el índice 4 del arreglo, la ciudad aparece escrita como `"medellín"` en lugar de `"Medellín"`.

**Decisión:** Conservar los datos originales, pero convertir los nombres de las ciudades a mayúsculas al momento de compararlos o agruparlos. También tendría en cuenta las tildes para evitar que una misma ciudad sea reconocida como dos diferentes.

### 2. Venta con cantidad igual a cero

En el índice 7 del arreglo (venta con `id: 8`), encontramos un producto con `cantidad: 0`. Considero que es un dato sospechoso, ya que no representa una compra efectiva.

**Decisión:** Mantener el registro original, pero excluirlo de los cálculos de ventas efectivas, porque no se vendió ninguna unidad.

### 3. Clientes repetidos

Un mismo cliente puede aparecer en varios registros porque ha realizado compras en diferentes momentos. Por ejemplo, el cliente `C01` aparece en tres ventas distintas.

Esto no representa un error, pero podría generar resultados incorrectos si queremos conocer la cantidad de clientes únicos.

**Decisión:** Conservar todas las compras realizadas, pero contar cada cliente una sola vez cuando se necesite calcular la cantidad de clientes únicos.

## Diccionario de datos

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