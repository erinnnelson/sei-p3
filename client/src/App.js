import React from 'react';
import './App.css';
import { verifyToken, createUser, loginUser, removeToken } from './services/api-helper';
import UserForm from './components/UserForm';
import QuestionsViewer from './components/QuestionsViewer';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { Route } from 'react-router-dom';

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
          <NavBar />
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
          <NavBar />
        </header>
        <>

          <div className="main-section">
            <div className="hero-img">
              <img className="cover-img" src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="hero-img" />
            </div>
          </div>
          <Route exact path='/' component={Main} />
          <Route exact path='/questions/:topic' component={(props) => <QuestionsViewer topic={props.match.params.topic} />} />
          <footer>
            <p>this is the footer</p>
          </footer>
        </>
      </div>
    );
  }
}

export default App;
