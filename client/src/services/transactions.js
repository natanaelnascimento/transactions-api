import http from './http-common';

const create = (data) => {
  return http.post('/transactions', data);
};

const findById = (id) => {
  return http.get(`/transactions/${id}`);
};

const findByPeriod = (period) => {
  return http.get(`/transactions?period=${period}`);
};

const update = (id, data) => {
  return http.put(`/transactions/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/transactions/${id}`);
};

export default {
  create,
  findById,
  findByPeriod,
  update,
  remove
};
