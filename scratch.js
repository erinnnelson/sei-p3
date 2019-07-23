const axios = require('axios');

const addAnswer = async () => {
  const resp = await axios.post('http://localhost:3000/questions/javascript/5/answers', {
    answer: 'this is a test',
  })
  console.log(resp.data);
}

const updateQuestion = async () => {
  const resp = await axios.put('http://localhost:3000/questions/css/1', {
    // title: 'The limit does not exist!',
    question: "Why is everything broken?"
  })
  console.log(resp.data);
}

const updateAnswer = async () => {
  const resp = await axios.put('http://localhost:3000/questions/css/1/answers/10', {
    answer: "It's gonna be okay!"
  })
  console.log(resp.data);
}

const deleteQuestion = async () => {
  const resp = await axios.delete('http://localhost:3000/questions/css/1');
  console.log(resp.data);
}

const main = async () => {
  // addAnswer();
  // updateQuestion();
  updateAnswer();
  // deleteQuestion();
};

main();