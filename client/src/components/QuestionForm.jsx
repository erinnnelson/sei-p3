import React from 'react';

const QuestionForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <select
          name="topic"
          value={props.formData.topic}
          onChange={props.handleChange}
        >
          <option name="javascript" value="javascript">JavaScript</option>
          <option name="html" value="html">HTML</option>
          <option name="css" value="css">CSS</option>
          <option name="react" value="react">React</option>
          <option name="sql" value="sql">SQL</option>
          <option name="express" value="express">Express</option>
          <option name="node" value="node">Node</option>
          <option name="other" value="other">Other</option>
        </select>
        <input
          type="text"
          name="title"
          value={props.formData.title}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="question"
          value={props.formData.question}
          onChange={props.handleChange}
        />
        <input type="submit" value="submit" />
        <button onClick={props.cancel}>cancel</button>
      </form>
    </div>
  )
}

export default QuestionForm;