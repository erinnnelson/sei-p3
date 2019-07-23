import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchQuestions = (topic) => {
  const res = api.get(`${BASE_URL}/questions/${topic}`);
  return res.data;
};

export const createQuestion = (data) => {
  const res = api.post(`${BASE_URL}/questions/${data.topic}`, data);
  return res.data;
};

export const fetchQuestion = (topic, id) => {
  const res = api.get(`${BASE_URL}/questions/${topic}/${id}`);
  return res.data;
};

export const fetchAnswers = (topic, id) => {
  const res = api.get(`${BASE_URL}/questions/${topic}/${id}/answers`);
  return res.data;
};

export const createAnswer = (topic, id) => {
  const res = api.post(`${BASE_URL}/questions/${topic}/${id}/answers`);
  return res.data;
};

