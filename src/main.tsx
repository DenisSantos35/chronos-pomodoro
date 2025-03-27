import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div>
      <h1>Hello World! (HTML)</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        explicabo velit? Rem accusantium odit provident laudantium magni qui
        quam doloribus, nobis officiis laborum doloremque, corrupti deserunt
        natus placeat praesentium iure.
      </p>
    </div>
  </StrictMode>,
);
