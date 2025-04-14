import { createContext, useContext, useState } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';

// modelo dos dados do meu contexto
const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

//tipagem do contexto
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// valor inicial do contexto
const initialContextValue = {
  state: initialState,
  setState: () => {},
};

// criando o contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

//tipagem da children que vai receber o provider
// o provider é um componente que vai envolver toda a aplicação
// e vai fornecer o contexto para todos os componentes filhos
type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState<TaskStateModel>(initialState);
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
