import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';

export function MainForm() {
  // const [taskName, setTaskName] = useState('');
  //usando useRef para pegar o valor do input
  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Deu certo ${taskNameInput.current?.value}`);
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
