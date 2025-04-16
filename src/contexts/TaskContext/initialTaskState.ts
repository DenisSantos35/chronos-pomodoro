import { TaskStateModel } from '../../models/TaskStateModel';

// modelo dos dados do meu contexto
export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0, // loop de 1 a 8 retornando a 1.
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
