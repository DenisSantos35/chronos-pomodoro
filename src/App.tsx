// export const App = () => {
//   return (
//     <div>
//       <h1>Hello World! (App)</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
//         explicabo velit? Rem accusantium odit provident laudantium magni qui
//         quam doloribus, nobis officiis laborum doloremque, corrupti deserunt
//         natus placeat praesentium iure.
//       </p>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <h1>Hello World! (App)</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
//         explicabo velit? Rem accusantium odit provident laudantium magni qui
//         quam doloribus, nobis officiis laborum doloremque, corrupti deserunt
//         natus placeat praesentium iure.
//       </p>
//     </div>
//   );
// }

// export { App };

import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        explicabo velit? Rem accusantium odit provident laudantium magni qui
        quam doloribus, nobis officiis laborum doloremque, corrupti deserunt
        natus placeat praesentium iure.
      </p>
    </>
  );
}
