import React from 'react';
import './App.css';
import { verifyToken, createUser } from './services/api-helper';
import UserForm from './components/UserForm';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tackle;</h1>
          <UserForm
            loginFormData={this.state.loginFormData}
            handleLoginFormChange={this.handleLoginFormChange}
            handleRegisterFormSubmit={this.handleRegisterFormSubmit}
            registerFormData={this.state.registerFormData}
            handleRegisterFormChange={this.handleRegisterFormChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
