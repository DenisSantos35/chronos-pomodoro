import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useContext(TaskContext);
  //ciclos cria o próximo ciclo
  const nextCycle = getNextCycle(state.currentCycle);

  //pegar o proximo ciclo atravé de calculo
  const nextCycleType = getNextCycleType(nextCycle);
  //tips
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime} min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime} min</b>
      </span>
    ),
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime} min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso é de <b>{state.config.shortBreakTime} min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo descanso será <b>longo</b>
      </span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
