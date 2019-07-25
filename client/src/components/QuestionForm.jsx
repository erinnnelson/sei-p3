import React from 'react';

const QuestionForm = (props) => {
  return (
    <div>
      <form className="main-question-form" onSubmit={props.handleSubmit}>
        <select className="main-question-form-dropdown"
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
        <input id="main-question-form-input"
          type="text"
          name="title"
          value={props.formData.title}
          onChange={props.handleChange}
          placeholder="Title"
        />
        <input id="main-question-form-input"
          type="text"
          name="question"
          value={props.formData.question}
          onChange={props.handleChange}
          placeholder="Question"
        />
        <input id="button-id" type="submit" value="submit" />
        <button id="button-id" onClick={props.cancel}>cancel</button>
      </form>
    </div>
  )
}

export default QuestionForm;