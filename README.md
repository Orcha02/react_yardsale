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
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
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