import axios from 'axios';

// const BASE_URL = 'https://boiling-castle-93133.herokuapp.com/';
const BASE_URL = 'http://localhost:3000'
const api = axios.create({
  baseURL: BASE_URL,
});

export const getPing = async () => {
  const res = await api.get('/ping');
  return res;
};

const storeToken = (token) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem('authToken');
}


//////////////////////////////
///// USER API CALLS/////////
/////////////////////////////
export const verifyToken = async () => {
  const token = localStorage.getItem('authToken');
  if (token !== null) {
    try {
      const resp = await api.get('/users/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      storeToken(token);
      return resp.data.user;
    } catch (e) {
      console.log(e.message);
      console.log('invalid token');
    }
  }
  else { console.log('user not logged in') };
};

export const loginUser = async (data) => {
  const res = await api.post('/users/login', data);
  const { user, token } = res.data;
  storeToken(token);
  return user;
};

export const fetchUsers = async () => {
  const res = await api.get(`/users/`);
  return res.data;
};

export const fetchUser = async (id) => {
  const res = await api.get(`/users/id/${id}`);
  return res.data;
};

export const createUser = async (data) => {
  const res = await api.post('/users', data);
  storeToken(res.data.token);
  return res.data;
};


//////////////////////////////
// QUESTION API CALLS/////////
/////////////////////////////
export const fetchQuestions = async (topic) => {
  const res = await api.get(`/questions/${topic}`);
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


//////////////////////////////
/// ANSWER API CALLS/////////
/////////////////////////////
export const fetchAnswers = async (topic, id) => {
  const res = await api.get(`/questions/${topic}/${id}/answers`);
  return res.data;
};

export const createAnswer = async (topic, id, data) => {
  const res = await api.post(`/questions/${topic}/${id}/answers`, data);
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