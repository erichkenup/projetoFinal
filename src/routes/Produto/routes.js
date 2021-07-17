import http from '../../service/httpCommon';

const URL_PRODUTO = '/produtos';

const obterTodos = async () => {
  return await http.get(URL_PRODUTO);
};

const obterPorID = async(id) => {
  return await http.get(`${URL_PRODUTO}/${id}`);
};

const cadastrar = async(produto) => {
  return await http.post(URL_PRODUTO, produto);
};

const atualizar = async(id, produto) => {
  return await http.put(`${URL_PRODUTO}/${id}`, produto);
};

const deletar = async(id) => {
  return await http.delete(`${URL_PRODUTO}/${id}`);
};

export default {
  obterTodos,
  obterPorID,
  cadastrar,
  deletar,
  obterPorID,
};
