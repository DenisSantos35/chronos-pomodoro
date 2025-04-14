//tipagem da children que vai receber o provider
// o provider é um componente que vai envolver toda a aplicação

import { useState } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

// e vai fornecer o contexto para todos os componentes filhos
type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState<TaskStateModel>(initialTaskState);
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
