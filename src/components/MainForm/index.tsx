import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useContext, useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';

export function MainForm() {
  const { setState } = useContext(TaskContext);
  // const [taskName, setTaskName] = useState('');
  //usando useRef para pegar o valor do input
  const taskNameInput = useRef<HTMLInputElement>(null);
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
      duration: 1,
      type: 'workTime',
    };

    //CONVERTER TEMPO EM SEGUNDOS
    const secondsRemaining = newTask.duration * 60;

    //SETAR DADOS NA TASKSTATEMODEL
    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, //TODO:conferir
        secondsRemaining, //TODO:conferir
        formatedSecondsRemaining: '00:00', //TODO:conferir
        tasks: [...prevState.tasks, newTask],
      };
    });

    console.log(taskName);
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
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25 min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
