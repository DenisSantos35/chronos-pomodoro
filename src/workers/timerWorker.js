let isRunning = false;
self.onmessage = function (event) {
  if (isRunning) return;
  // If the timer is already running, ignore the new message
  isRunning = true;
  // If the timer is not running, start it
  const state = event.data;
  // The state is the object that contains the activeTask and secondsRemaining
  const { activeTask, secondsRemaining } = state;
  // activeTask is the object that contains the task information
  const endDate = activeTask.startDate + secondsRemaining * 1000;
  console.log('endDate', new Date(endDate));

  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(countDownSeconds);
    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }
  tick();
};
