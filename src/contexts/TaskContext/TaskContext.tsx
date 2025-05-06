import { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskActionModel } from './taskActions';

//tipagem do contexto
type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

// valor inicial do contexto
const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

// criando o contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
