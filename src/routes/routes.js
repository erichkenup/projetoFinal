import http from '../service/httpCommon';

const URL_PRODUTO = '/produtos';

const obterTodos = () => {
  return http.get(URL_PRODUTO);
};

const obterPorID = (id) => {
  return http.get(`${URL_PRODUTO}/${id}`);
};

const cadastrar = (produto) => {
  return http.post(URL_PRODUTO, produto);
};

const atualizar = (id, produto) => {
  return http.put(`${URL_PRODUTO}/${id}`, produto);
};

const deletar = (id) => {
  return http.delete(`${URL_PRODUTO}/${id}`);
};

export default {
  obterTodos,
  obterPorID,
  cadastrar,
  deletar,
  obterPorID,
};
