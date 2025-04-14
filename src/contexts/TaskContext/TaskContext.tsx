import { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';

//tipagem do contexto
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// valor inicial do contexto
const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

// criando o contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
