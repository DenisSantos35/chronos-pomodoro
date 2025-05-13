import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useContext, useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { showMessage } from '../../adapters/showMessage';

export function MainForm() {
  //utilizando o contexto
  const { state, dispatch } = useContext(TaskContext);
  // const [taskName, setTaskName] = useState('');
  //usando useRef para pegar o valor do input
  const taskNameInput = useRef<HTMLInputElement>(null);

  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  //ciclos cria o próximo ciclo
  const nextCycle = getNextCycle(state.currentCycle);

  //pegar o proximo ciclo atravé de calculo
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    //previnir evento de submit
    event.preventDefault();
    showMessage.dismiss();

    //pegar dados do input
    //tratamentos para nulo e vazio.
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warn('Digite o nome da tarefa');
      return;
    }

    //criação da nova task (tarefa)
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    showMessage.success(`Tarefa iniciada!`);
  }
  // Interrompendo a task e zerando dados
  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.error('Tarefa interrompida');
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }
  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='task'
          placeholder='Digite algo'
          //input controlado é necessário passar um value e um onChange
          //o value é o valor do input e o onChange é a função que vai atualizar o valor do input
          // value={taskName}
          // onChange={event => setTaskName(event.target.value)}
          //pegando valor com ref
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>
      <div className='formRow'>
        <Tips />
      </div>
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}
      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            aria-label='Inicial nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            key={'buttom_submit'}
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label='Interomper tarefa atual'
            title='Interomper tarefa atual'
            type='button'
            icon={<StopCircleIcon />}
            color='red'
            onClick={handleInterruptTask}
            key={'buttom_button'}
          />
        )}
      </div>
    </form>
  );
}
