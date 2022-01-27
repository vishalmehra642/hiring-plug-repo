import axios from "axios";

// Default API will be your root
export const API_ROOT = "";
const TIMEOUT = 20000;

const http = (baseURL = API_ROOT, timeout = TIMEOUT ) => {

  const client = axios.create({
    baseURL,
    timeout,
  });

  // Intercept response object and handleSuccess and Error Object
  client.interceptors.response.use(handleSuccess, handleError);

  function handleSuccess(response) {
    return response;
  }

  /** Intercept any unauthorized request.
   * status 401 means either accessToken is expired or invalid
   * dispatch logout action accordingly **/
  function handleError(error) {
    if (error.response?.status !== 500) {
      return Promise.reject(error.response?.data);
    } else {
      return Promise.reject(error);
    }
  }

  function get(path) {
    return client.get(path).then((response) => response.data);
  }

  function post(path, payload) {
    return client.post(path, payload).then((response) => response.data);
  }

  function put(path, payload) {
    return client.put(path, payload).then((response) => response.data);
  }

  function patch(path, payload) {
    return client.patch(path, payload).then((response) => response.data);
  }

  function _delete(path, data) {
    if (data) {
      return client
        .delete(path, { data: data })
        .then((response) => response.data);
    }
    return client.delete(path).then((response) => response.data);
  }

  return {
    get,
    post,
    put,
    patch,
    delete: _delete,
  };
};

export default http;
