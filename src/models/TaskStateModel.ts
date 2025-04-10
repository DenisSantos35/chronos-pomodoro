import { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number; // segundos restantes
  formatedSecondsRemaining: string; // segundos formatados
  activeTask: TaskModel | null; // tarefa ativa
  currentCycle: number; // ciclo atual
  config: {
    workTime: number; // tempo de trabalho
    shortBreakTime: number; // tempo de pausa curta
    longBreakTime: number; // tempo de pausa longa
  };
};
