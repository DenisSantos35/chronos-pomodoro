//useReducer -> hook do React que recebe um reducer e um estado inicial
//reducer -> função que recebe o estado atual e uma ação, e retorna o novo estado
//state -> o estado atual
//action -> a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
//type -> o tipo da ação, geralmente uma string (pode ser enum, constante, etc).
//payload -> os dados extras enviados junto com a action, se necessário para atualizar o estado.

import { TaskModel } from '../../models/TaskModel';

//Criação do type
export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

//Estruturação das actions
export type TaskActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    };

export type TaskActionWithOutPayload = {
  type: TaskActionTypes.RESET_STATE;
};

export type TaskActionModel = TaskActionWithPayload | TaskActionWithOutPayload;
