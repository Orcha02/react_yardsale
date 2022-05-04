# JSX:

- Es la extensión de archivos que se usa en react donde podemos hacer html dentro de js facilitando el uso sacando lo mejor de html css y js.

# Virual DOM

- Es una copia del DOM real y lo que hace es compararlo, asi cuando existe algun cambio no se tiene que renderizar toda la pantalla si no solo lo que se cambio mejorando el desempeño de nuestra app (se compara el Virtual DOM con el DOM Real encontrando los cambios)

## SHORTCUT PARA WEBPACK EN VSCODE

### 1. control + shift + p

### 2. escriben snippets en el recuadro que les aparece

### 3. seleccionan preferences: configure user snippets

### Aparece un json y copio lo siguiente

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
- Ej: Un comentario de twitter, una sección de youtube de ME GUSTA y NO ME GUSTA son todos moléculas. Estas están compuestas de algunos componentes más pequeños (botónes y cuadros de texto).

- **Organismos:** Están compuesto de muchas moléculas. Pero lo más interesante, es que tienen vida propia, y pueden interactuar en una manera muy amplia con otros organismos.
- Ej: Imagina una abeja con una flor, ambos colaboran de una u otra manera a que el otro esté bien. En nuestro diseño, imagina al header. El header está compuesto de muchos elementos, y tienen un impacto muy grande en la app. O incluso, de una sección como una tienda de ropa en la paǵina web. Seguramente te das cuenta, que estos tienen muchos artículos, y todos constan de una imaǵen, precio, y un ordenamiento. Puedes verlo así:

Átomo⇒ imágen, precio, descripción

Molécula ⇒ el cuadro que contiene a la imágen, al precio y a la descripción.

Organismo ⇒ todos los cuadros ordenados en forma de tabla.

El organismo si te das cuenta, puede usar moléculas del mismo tipo o diferentes. El punto clave, es que no trates de abarcar tanto, y que pertenecen a una sección claramente definida en nuestra app.

- **Templates:** Es la plantilla en la cual siempre organizarás los organismos. Es decir, el esqueleto que indica donde irá por ejemplo, el Header, el footer, grid y sección de comentarios.

- **Pages:** Finalmente tenemos a la constitución de nuestra app. Las pages son en sí, toda la página funcionando con contenido interactúando entre ellas.
