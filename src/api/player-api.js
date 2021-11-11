import axios from 'axios';

const api = axios.create({
  baseURL: 'https://whoskips-server.herokuapp.com/api/',
});

export const createPlayer = (payload) => api.post(`/player`, payload);
export const updatePlayer = (id, payload) => api.put(`/player/${id}`, payload);
export const getAllPlayers = () => api.get(`/players`);
export const getPlayerById = (id) => api.get(`/player/${id}`);
export const deletePlayer = (id) => api.delete(`/player/${id}`);

const apis = {
  createPlayer,
  updatePlayer,
  getAllPlayers,
  getPlayerById,
  deletePlayer,
};

export default apis;
