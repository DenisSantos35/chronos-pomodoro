import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useContext, useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  //utilizando o contexto
  const { state, setState } = useContext(TaskContext);
  // const [taskName, setTaskName] = useState('');
  //usando useRef para pegar o valor do input
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos cria o próximo ciclo
  const nextCycle = getNextCycle(state.currentCycle);
  console.log('nextCycle', nextCycle);

  //pegar o proximo ciclo atravé de calculo
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    //previnir evento de submit
    event.preventDefault();

    //pegar dados do input
    //tratamentos para nulo e vazio.
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
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

    //CONVERTER TEMPO EM SEGUNDOS
    const secondsRemaining = newTask.duration * 60;

    //SETAR DADOS NA TASKSTATEMODEL atribuindo a nova task
    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, //TODO:conferir
        formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), //TODO:conferir
        tasks: [...prevState.tasks, newTask],
      };
    });

    console.log(taskName);
  }
  // Interrompendo a task e zerando dados
  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
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
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25 min</p>
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
