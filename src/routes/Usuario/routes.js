import http from '../../service/httpCommon';

const URL_LOGIN = '/login';

const login = async (usuario) => {
  return await http.post(URL_LOGIN,usuario);
};

export default {
  login
};
