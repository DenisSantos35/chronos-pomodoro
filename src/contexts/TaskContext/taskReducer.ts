import { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionModel, TaskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  //reducer sempre deve retornar o estado
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
    default:
      return state;
  }
}
