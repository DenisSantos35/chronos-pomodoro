import { TaskStateModel } from '../models/TaskStateModel';

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  // Singleton para garantir que o worker seja criado apenas uma vez
  private worker: Worker;

  // Construtor privado para evitar instâncias externas
  private constructor() {
    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }
  // Método estático para obter a instância única
  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }
    return instance;
  }
  // Metodo utilizado para enviar mensagens pelo worker
  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }
  // Método para receber mensagens do worker
  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }
  // Método para encerrar o worker
  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
