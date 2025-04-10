import { TaskModel } from './TaskModel';

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // histórico, mainform
  secondsRemaining: number; // segundos restantes, countdown, histórico, mainform, button, home
  formatedSecondsRemaining: string; // segundos formatados, titulo, countdown
  activeTask: TaskModel | null; // tarefa ativa, countdown, histórico, mainform, button
  currentCycle: number; // ciclo atual, home
  config: {
    workTime: number; // tempo de trabalho, mainform
    shortBreakTime: number; // tempo de pausa curta, mainform
    longBreakTime: number; // tempo de pausa longa, mainform
  };
};
