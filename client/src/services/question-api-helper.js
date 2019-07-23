import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchQuestions = async (topic) => {
  const res = await api.get(`/questions/${topic}`);
  debugger;
  return res.data;
};

export const createQuestion = async (data) => {
  const res = await api.post(`/questions/${data.topic}`, data);
  return res.data;
};

export const fetchQuestion = async (topic, id) => {
  const res = await api.get(`/questions/${topic}/${id}`);
  return res.data;
};

export const updateQuestion = async (topic, id, data) => {
  const res = await api.put(`/questions/${topic}/${id}`, data);
  return res.data;
};

export const deleteQuestion = async (topic, id) => {
  const res = await api.delete(`/questions/${topic}/${id}`);
  return res.data;
};

export const fetchAnswers = async (topic, id) => {
  const res = await api.get(`/questions/${topic}/${id}/answers`);
  return res.data;
};

export const createAnswer = async (topic, id) => {
  const res = await api.post(`/questions/${topic}/${id}/answers`);
  return res.data;
};

export const updateAnswer = async (topic, question_id, ans_id, data) => {
  const res = await api.put(`/questions/${topic}/${question_id}/answers/${ans_id}`, data);
  return res.data;
};

export const deleteAnswer = async (topic, question_id, ans_id) => {
  const res = await api.delete(`/questions/${topic}/${question_id}/answers/${ans_id}`);
  return res.data;
};