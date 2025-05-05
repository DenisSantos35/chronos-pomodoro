//tipagem da children que vai receber o provider
// o provider é um componente que vai envolver toda a aplicação

import { useEffect, useReducer, useState } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

// e vai fornecer o contexto para todos os componentes filhos
type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState<TaskStateModel>(initialTaskState);

  //Reducer é uma função que recebe state e action e retorna um state
  //Para disparar a ação do reducer é necessário ter uma função, botão ou algo que dispare.
  const [number, dispatch] = useReducer((state, action) => {
    console.log(action, state);
    switch (action) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'CLEAR':
        return (state = 0);
    }
    return state; //estado atual, não é alterado.
  }, 0);
  //verificar mudança de estado do state
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  function handleIncrement() {
    //toda vez que é chamado o dispatch, é chamado o useReducer e um valor é passado para action
    //com um switch é verificado se a action é = ao valor que esta sendo passado,
    //caso seja retorna se um novo estado,
    //caso nao seja retorna o estado atual.
    dispatch('INCREMENT');
  }

  function handleDecrement() {
    dispatch('DECREMENT');
  }

  function handleClear() {
    dispatch('CLEAR');
  }

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O numero é: {number}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleClear}>Clear</button>
    </TaskContext.Provider>
  );
}
