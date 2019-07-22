import React from 'react';

const UserForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleLoginFormSubmit}>
        <input onChange={props.handleLoginFormChange} name="username" type="text" value={props.loginFormData.username} />
        <input onChange={props.handleLoginFormChange} name="password" type="password" value={props.loginFormData.password} />
        <input type="submit" value="login" />
      </form>
      <hr />
      <form onSubmit={props.handleRegisterFormSubmit}>
        <input onChange={props.handleRegisterFormChange} name="username" type="text" value={props.registerFormData.username} />
        <input onChange={props.handleRegisterFormChange} name="email" type="text" value={props.registerFormData.email} />
        <input onChange={props.handleRegisterFormChange} name="password" type="password" value={props.registerFormData.password} />
        <input type="submit" value="register" />
      </form>
    </div>
  )
}

export default UserForm;