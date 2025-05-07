self.onmessage = function (event) {
  console.log('WORKER recebeu:', event.data);

  // worker responde a mensagem recebida
  self.postMessage('Olá Para você tambem');

  switch (event.data) {
    case 'FAVOR': {
      self.postMessage('Sim, posso fazer um favor');
      break;
    }
    case 'FALA OI': {
      self.postMessage('OK, OI!');
      break;
    }
    case 'FECHAR': {
      self.postMessage('tÁ BOM, VOU FECHAR');
      self.close();
      break;
    }
    default:
      self.postMessage('Não entendi');
  }
};
