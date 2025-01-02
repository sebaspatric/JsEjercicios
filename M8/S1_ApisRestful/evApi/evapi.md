El sitio **public-apis** en GitHub es una lista colaborativa de APIs públicas, organizadas por categorías como finanzas, clima, entretenimiento, entre otras. En la categoría de **Currency Exchange** (Intercambio de Monedas), se incluye la **Currency-api**, que proporciona acceso a tasas de cambio actuales y pasadas de diversas monedas.

### Estructura del sitio:
- **Listados de APIs:** Clasificados por categorías.
- **Descripción de cada API:** Explicación básica de lo que ofrece la API.
- **Enlaces a la documentación:** Para aprender a usar cada API.
  
En este caso, la API **Currency-api** permite acceder a datos de tasas de cambio de monedas, tanto actuales como históricas.

### Respuestas a las preguntas:

1. **¿Qué observas en el sitio, de qué se trata?**
   - Es un repositorio de APIs públicas, y dentro de la sección de intercambio de monedas se encuentra la **Currency-api**, que ofrece información sobre las tasas de cambio de monedas en tiempo real y para fechas anteriores.

2. **¿Cuál es la estructura?**
   - La API está organizada de la siguiente forma:
     - **Últimas tasas de cambio**: Proporciona las tasas más actuales.
     - **Tasas históricas**: Consultas para fechas pasadas.
     - **Rutas por monedas**: Permite consultar directamente entre dos monedas, como `clp/usd`.

3. **¿Cómo obtengo el tipo de cambio actual de pesos chilenos, con relación a otras monedas?**
   - **Ruta:**  
     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/clp.json`
   - **Ejemplo de respuesta:**
     ```json
     {
       "clp": {
         "usd": 0.0012,
         "eur": 0.0011,
         "gbp": 0.0009
       }
     }
     ```

4. **¿Cómo obtengo la tasa de cambio actual del peso chileno con relación al dólar?**
   - **Ruta:**  
     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/clp/usd.json`
   - **Ejemplo de respuesta:**
     ```json
     {
       "usd": 0.0012
     }
     ```

5. **¿Cómo obtengo la tasa de cambio de peso chileno para el 10-01-2022, con relación al dólar?**
   - **Ruta:**  
     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-01-10/currencies/clp/usd.json`
   - **Ejemplo de respuesta:**
     ```json
     {
       "usd": 0.0013
     }
     ```

6. **¿Qué tipo de operaciones permite la API Free Currency Rates API?**
   - **Consulta de tasas actuales** para cualquier moneda.
   - **Consulta de tasas históricas** para fechas específicas.
   - **Conversión directa entre monedas** usando rutas específicas como `clp/usd`.
   - Soporta más de 150 monedas globalmente.