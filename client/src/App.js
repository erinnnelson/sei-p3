import React from 'react';
import './App.css';
import { verifyToken, createUser, loginUser, removeToken } from './services/user-api-helper';
import UserForm from './components/UserForm';
import QuestionsViewer from './components/QuestionsViewer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      registerFormData: {
        username: '',
        password: '',
        email: ''
      },
      loginFormData: {
        username: '',
        password: ''
      },
    }
  }
  async componentDidMount() {
    const user = await verifyToken();
    if (user) {
      this.setState({
        user: user
      })
    }
  }

  handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value,
      }
    }))
  }

  handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const user = this.state.loginFormData;
    const res = await loginUser(user);
    this.setState({
      user: res,
    });
  };

  handleRegisterFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value,
      }
    }))
  }

  handleRegisterFormSubmit = async (e) => {
    e.preventDefault();
    const newUser = this.state.registerFormData;
    const res = await createUser(newUser);
    this.setState({
      user: res.user,
      registerFormData: {
        username: '',
        email: '',
        password: ''
      },
    });
  };

  handleLogOut = (e) => {
    e.preventDefault();
    removeToken();
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tackle;</h1>
          {this.state.user ?
            (<div>
              <p>Hello {this.state.user.username}</p>
              <button onClick={this.handleLogOut}>Logout</button>
            </div>) :
            (<UserForm
              loginFormData={this.state.loginFormData}
              handleLoginFormChange={this.handleLoginFormChange}
              handleLoginFormSubmit={this.handleLoginFormSubmit}
              registerFormData={this.state.registerFormData}
              handleRegisterFormChange={this.handleRegisterFormChange}
              handleRegisterFormSubmit={this.handleRegisterFormSubmit}
            />)}
        </header>
      </div>
    );
  }
}

export default App;
