import { requests } from './constants';

export function postNomeDaObra(body, callback) {
  const req = {
    ...requests.GET_DADOS.request,
    body
  };
  fetch(requests.GET_DADOS.url, req)
  .then(response => response.text())
  .then(callback)
  .catch(error => {
    console.error('Erro ao carregar dados do servidor:', error);
    callback(requests.GET_DADOS.response);
  });
}