import { Home } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';
// import { NotFound } from './pages/NotFound';
// import { AboutPomodoro } from './pages/AboutPomodoro';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
export function App() {
  const [state, setState] = useState<TaskStateModel>(initialState);
  console.log('state', state);
  console.log('state.tasks', setState);
  return <Home />;
  // <AboutPomodoro />;
  // <NotFound />;
}
