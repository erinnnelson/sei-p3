const axios = require('axios');

const addAnswer = async () => {
  const resp = await axios.post('http://localhost:3000/answers/question/1', {
    answer: 'onions',
    verified: false,
  })
  console.log(resp.data);
}
addAnswer();