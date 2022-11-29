> 1. Set-up GitHub Actions
- create a .github/workflows folder and add a copy of .github/workflows/linters.yml (https://github.com/microverseinc/linters-config/blob/master/html-css/.github/workflows/linters.yml) to that folder.
- you need to initialize npm to create package.json file.
```sh
npm init -y
``` 

> 2. Set up Webhint
```sh
npm install --save-dev hint@7.x
``` 
- Copy .hintrc (https://github.com/microverseinc/linters-config/blob/master/html-css/.hintrc) to the root directory of your project.

> 3. Stylelint
- A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
```sh
  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
- Copy .stylelintrc.json (https://github.com/microverseinc/linters-config/blob/master/html-css/.stylelintrc.json) to the root directory of your project.

> 4. ESLint
```sh
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
- Copy .eslintrc.json(https://github.com/microverseinc/linters-config/blob/master/html-css-js/.eslintrc.json) to the root directory of your project.

> 5. WebPack
- install the webpack-cli (the tool used to run webpack on the command line):
```sh
 npm install webpack webpack-cli --save-dev
```
- find details here https://webpack.js.org/guides/getting-started/
- Installing CSS loaders
```sh
npm install --save-dev style-loader css-loader
```
- Loading Data formats
```sh
npm install --save-dev csv-loader xml-loader
```
- HtmlWebpackPlugin
```sh
npm install --save-dev html-webpack-plugin
```
- Using webpack-dev-server
```sh
npm install --save-dev webpack-dev-server 
npm install --save-dev express webpack-dev-middleware
```