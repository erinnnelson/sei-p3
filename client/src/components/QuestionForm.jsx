import React from 'react';

const QuestionForm = (props) => {
  return (
    <div>
      <form>
        <select
          name="topic"
          value={props.topic}>
          <option>JavaScript</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>React</option>
          <option>SQL</option>
          <option>Express</option>
          <option>Node</option>
          <option>Other</option>
        </select>
        <input type="text" name="title" />
        <input type="text" name="question" />
        <input type="submit" value="submit" />
        <button onClick={props.cancel}>cancel</button>
      </form>
    </div>
  )
}

export default QuestionForm;