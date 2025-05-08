//tipagem da children que vai receber o provider
// o provider é um componente que vai envolver toda a aplicação

import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';

// e vai fornecer o contexto para todos os componentes filhos
type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log('Mensagem recebida do worker:', countDownSeconds);
    if (countDownSeconds <= 0) {
      console.log('Worker COMPLETED');
      worker.terminate();
    }
  });

  // verificar mudança de estado do state
  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker terminado por falta de tarefa ativa');
      worker.terminate();
    }

    worker.postMessage(state);
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
