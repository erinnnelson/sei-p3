import React from 'react';

const UserForm = (props) => {
  return (
    <div>
      {props.isLogin ?
        <>
          <h3>Login</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            props.handleLoginFormSubmit(props.loginFormData);
          }}>
            <input
              onChange={props.handleLoginFormChange}
              name="username"
              type="text"
              value={props.loginFormData.username}
              placeholder="Username"
            />
            <input
              onChange={props.handleLoginFormChange}
              name="password"
              type="password"
              value={props.loginFormData.password}
              placeholder="Password"
            />
            <input
              type="submit"
              value="login"
            />
          </form>
        </>
        :
        <>
          <h3>Register</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            props.handleRegisterFormSubmit(props.registerFormData);
          }}>
            <input
              onChange={props.handleRegisterFormChange}
              name="username"
              type="text"
              value={props.registerFormData.username}
              placeholder="Username"
            />
            <input
              onChange={props.handleRegisterFormChange}
              name="email"
              type="text"
              value={props.registerFormData.email}
              placeholder="Email"
            />
            <input
              onChange={props.handleRegisterFormChange}
              name="password"
              type="password"
              value={props.registerFormData.password}
              placeholder="Password"
            />
            <input
              type="submit"
              value="register"
            />
          </form>
        </>
      }
    </div>
  )
}

export default UserForm;