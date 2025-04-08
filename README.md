# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the
configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install
[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# PascalCase

- App => Palavra simples começa com letra maiuscula em jsx ou tsx
- HeaderHeading => Palavra composta a cada palavra a primeira letra coloca se
  maiuscula
- ExemploDeComponente

/\* \*\* css modules console.log(styles); colocar duas classes no mesmo
componente const classes = `${styles.heading} ${styles.cyan}`

  <h1 className={classes}>Hello World! (App)</h1>
  ou
  <h1 className={`${styles.heading} ${styles.cyan}`}>Hello World! (App)</h1>*/

/\* \*\* props do componente <h1 className={styles.heading}> {props.children}
{props.attr} {props.attr2} </h1>

\*/

// export const App = () => { // return ( // <div> // <h1>Hello World!
(App)</h1> // <p> // Lorem ipsum dolor sit amet consectetur adipisicing elit.
Impedit, // explicabo velit? Rem accusantium odit provident laudantium magni qui
// quam doloribus, nobis officiis laborum doloremque, corrupti deserunt // natus
placeat praesentium iure. // </p> // </div> // ); // };

// function App() { // return ( // <div> // <h1>Hello World! (App)</h1> // <p>
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, //
explicabo velit? Rem accusantium odit provident laudantium magni qui // quam
doloribus, nobis officiis laborum doloremque, corrupti deserunt // natus placeat
praesentium iure. // </p> // </div> // ); // }

// export { App };

//// Há trez formas de utiliza use effect. //só o array => Executado toda vez
que o componete e renderiado // useEffect(() => { // console.log('useEffect sem
dependências', Date.now()); // }); ////com array de dependencias vazio =>
Executado quando o componente e montado pela primeira vez // useEffect(() => {
// console.log('useEffect com array de dependencias vazio', Date.now()); // },
[]); // //com array com dependencia => Executa toda vez que o valor da
dependencia for alterado

  <!-- useEffect(() => {
    console.log(`theme mudou para ${theme}`);
    document.documentElement.setAttribute('data-theme', theme);
    // Este retorno antes da montagem do proximo compontente limpa a sujeira anterior para depois montar o novo componente, cleanUp
    return () => {
      console.log('olha, este componente será atualizado');
    };
  }, [theme]); -->
