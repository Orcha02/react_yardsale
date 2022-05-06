# JSX:

- Es la extensión de archivos que se usa en react donde podemos hacer html dentro de js facilitando el uso sacando lo mejor de html css y js.

# Virual DOM

- Es una copia del DOM real y lo que hace es compararlo, asi cuando existe algun cambio no se tiene que renderizar toda la pantalla si no solo lo que se cambio mejorando el desempeño de nuestra app (se compara el Virtual DOM con el DOM Real encontrando los cambios)

## SHORTCUT PARA WEBPACK EN VSCODE

### 1. control + shift + p

### 2. escriben snippets en el recuadro que les aparece

### 3. seleccionan preferences: configure user snippets

### Aparece un json y copio lo siguiente

```
{
// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
// same ids are connected.
// Example:
// "Print to console": {
// "prefix": "log",
// "body": [
// "console.log('$1');",
// "$2"
// ],
// "description": "Log output to console"
// }
```

    "webpack config": {
    	"prefix": "wpc",
    	"body": [
    	  "const path = require(\"path\");",
    	  "const HtmlWebpackPlugin = require(\"html-webpack-plugin\");",
    	  "",
    	  "module.exports = {",
    	  "  entry: \"./src/index.js\",",
    	  "  output: {",
    	  "    path: path.resolve(__dirname, \"dist\"),",
    	  "    filename: \"bundle.js\",",
    	  "  },",
    	  "  resolve: {",
    	  "    extensions: [\".js\", \".jsx\"],",
    	  "  },",
    	  "  module: {",
    	  "    rules: [",
    	  "      {",
    	  "        test: /\\.(js|jsx)$/,",
    	  "        exclude: /node_modules/,",
    	  "        use: {",
    	  "          loader: \"babel-loader\",",
    	  "        },",
    	  "      },",
    	  "      {",
    	  "        test: /\\.html$/,",
    	  "        use: [",
    	  "          {",
    	  "            loader: \"html-loader\",",
    	  "          },",
    	  "        ],",
    	  "      },",
    	  "    ],",
    	  "  },",
    	  "  plugins: [",
    	  "    new HtmlWebpackPlugin({",
    	  "      template: \"./public/index.html\",",
    	  "      filename: \"./index.html\",",
    	  "    }),",
    	  "  ],",
    	  "  devServer: {",
    	  "    contentBase: path.join(__dirname, \"dist\"),",
    	  "    compress: true,",
    	  "    port: 3000,",
    	  "  },",
    	  "};",
    	],
    	"description": "webpack configuration"
      }

}

- Ahora para crear el archivo de configuracion de webpack solo escribo `wpc`

`npm run start` Habilita nuestro entorno de desarrollo local para poder ver el proyecto funcionando

`imr` Imports React
`sfc` Stateless Function Component (Arrow function)

# ¿Qué es router en React?

- React es de tipo SPA(single page application), no recarga la página cuando cambiamos de url.
- Router nos ayuda a crear otra página para poder navegar en nuestra aplicación.
- Ej: Cuando damos click en un tweet, se abre otra sección donde puedes ver el tweet. Sería un problema que al momento de darle click, no cambie la url, por lo que ese tweet no tiene dirección propia, no se guardaría en tu historial. Para ello, usamos router, que se encargará de administrar esta situación, donde en el momento que abras el tweet, cambie la URL, pero todavía mantenga ese dinamismo y rapidez de una SPA.

# ¿Qué es atomic design?

- **Átomos:** Son las partes más fundamentales y pequeñas que usamos.
- Ej: Los botones, textos, imágenes o entradas de texto.

- **Moléculas:** Las moléculas son una unión de átomos. Todas estas moléculas, normalmente tienen una función específica para la cuál necesitan varios átomos.
- Ej: Un comentario de twitter, una sección de youtube de ME GUSTA y NO ME GUSTA son todos moléculas. Estas están compuestas de algunos componentes más pequeños (botónes, cuadros de texto o Texto + imagen).

- **Organismos:** Están compuesto de muchas moléculas. Pero lo más interesante, es que tienen vida propia, y pueden interactuar en una manera muy amplia con otros organismos.
- Ej: Imagina una abeja con una flor, ambos colaboran de una u otra manera a que el otro esté bien. En nuestro diseño, imagina al header. El header está compuesto de muchos elementos, y tienen un impacto muy grande en la app. O incluso, de una sección como una tienda de ropa en la paǵina web. Seguramente te das cuenta, que estos tienen muchos artículos, y todos constan de una imaǵen, precio, y un ordenamiento. Puedes verlo así:

Átomo⇒ imágen, precio, descripción

Molécula ⇒ el cuadro que contiene a la imágen, al precio y a la descripción.

Organismo ⇒ todos los cuadros ordenados en forma de tabla.

**Es la unión de moléculas.**
Un header: logo + nav + buscador

- **Templates:** Es la plantilla en la cual siempre organizarás los organismos. Es decir, el esqueleto que indica donde irá por ejemplo, el Header, el footer, grid y sección de comentarios. La unión de organismos de forma estructurada formando una sección: Home, about, etc.

- **Pages:** Finalmente tenemos a la constitución de nuestra app. Las pages son en sí, toda la página funcionando con contenido interactúando entre ellas. Es la combinación del template, API e interacciones del usuario.

# Tipos de componentes en React: stateful vs. stateless

- Stateful: Logica y estado.

- Stateless: Presentacionales, solo retorna un template.

# Aliases

In the resolve section of the webpack config we can create aliases to make a more friendly code, and write shorter paths.

![image](https://user-images.githubusercontent.com/77861219/167038335-28b2865e-18cc-48a5-bcdd-55121d33cb16.png)

# ¿Cómo usar useState?

- useState es una manera de usar estado con los React Hooks. Recordemos que los estados son maneras en la que un componente puede administrar información cambiante en el entorno, y después de ser llamado se renderiza el React DOM de nuevo.

![image](https://user-images.githubusercontent.com/77861219/167222907-d5a670d0-d577-456a-99db-818ba1c0e8f6.png)

## Ejemplo React.useState:

import React, {useState} from ‘react’;

Crear const [uno, setUno] = useState(‘1’)

Donde ‘uno’ es la variable que modificara su estado, ‘setUno’ es la función que modificara su estado al suceder X cosa, y ‘1’ es el valor inicial que tendrá esa variable

- En el valor inicial o ‘1’ puede ir: bool, numero, string, objeto o array.

Manejando el evento del elemento que modificara su estado, activaremos la función que recibirá el evento y activara la función ‘setUno( )’ para modificar su valor, ej: setUno(‘2’)

Siempre que se recargue la página, el valor volverá a su valor inicial!

![image](https://user-images.githubusercontent.com/77861219/167223440-ef7dfb49-6a58-4d5c-986f-dc38c03f845e.png)

**!** => Nos cambia su valor a la inversa. Si está en False se vuelve True, y si está True se cambia a False

###### En la siguiente imagen decimos que si toggle es false (Ya que se declaró antes en False) no se muestra, pero que si se vuelve verdadero que muestre el componente de Menu

![image](https://user-images.githubusercontent.com/77861219/167223950-efca0db6-abcd-45b7-b4ea-2dd7b40cb27b.png)
