const axios = require('axios');

const addAnswer = async () => {
  const resp = await axios.post('http://localhost:3000/questions/css', {
    title: 'who invented css?',
    question: 'was it tacos?',
  })
  console.log(resp.data);
}
addAnswer();