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

  //Estado para tipagem da action do useReducer
  //nossa action agora recebera 2 parametros em forma de objeto, type e payload.
  type ActionType = {
    type: string;
    payload?: number;
  };

  //Reducer é uma função que recebe state e action e retorna um state
  //Para disparar a ação do reducer é necessário ter uma função, botão ou algo que dispare.
  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      console.log(action, state);

      switch (action.type) {
        case 'INCREMENT': {
          if (!action.payload) return state;
          return {
            ...state,
            secondsReamning: state.secondsReamning + action.payload,
          };
        }
        case 'DECREMENT': {
          if (!action.payload) return state;
          return {
            ...state,
            secondsReamning: state.secondsReamning - action.payload,
          };
        }
        case 'CLEAR': {
          // if (!action.payload) return state;
          return {
            secondsReamning: 0,
          };
        }
      }
      return state; //estado atual, não é alterado.
    },
    { secondsReamning: 0 },
  );
  //verificar mudança de estado do state
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O estado é: {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
        Incrementar + 10
      </button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 20 })}>
        Incrementar + 20
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 50 })}>
        Decrementar - 50
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
    </TaskContext.Provider>
  );
}
