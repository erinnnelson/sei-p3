import React from 'react';
import './App.css';
import { verifyToken, createUser, loginUser, removeToken, fetchUsers } from './services/api-helper';
import TopicQuestions from './components/TopicQuestions';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { Route } from 'react-router-dom';
import QuestionMain from './components/QuestionMain';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      users: [],
      loginModalIsOpen: false,
      regModalIsOpen: false,
      userLoginError: false,
      userRegisterError: false,
    }
  }

  openLoginModal = () => {
    this.setState({
      userLoginError: false,
      loginModalIsOpen: true
    });
  }

  openRegModal = () => {
    this.fetchUsers();
    this.setState({
      userRegisterError: false,
      regModalIsOpen: true
    });
  }

  closeLoginModal = () => {
    this.setState({
      userLoginError: false,
      loginModalIsOpen: false
    });
  }

  closeRegModal = () => {
    this.setState({
      userRegisterError: false,
      regModalIsOpen: false
    });
  }

  setUserLoginError = (boolean) => {
    this.setState({
      userLoginError: boolean
    })
  }

  setUserRegisterError = (boolean) => {
    this.setState({
      userRegNameError: boolean
    })
  }

  handleLoginFormSubmit = async (formData) => {
    try {
      const res = await loginUser(formData);
      console.log(res);
      this.setState({
        user: res,
      });
    }
    catch (e) {
      this.setUserLoginError(true);
    }
  }

  handleRegisterFormSubmit = async (formData) => {
    try {
      const res = await createUser(formData);
      this.setState({
        user: res.user,
        registerFormData: {
          username: '',
          email: '',
          password: ''
        },
      });
    } catch (e) {
      console.log(e);
      this.setState({
        userRegisterError: true,
      })
    }
  };

  handleLogOut = (e) => {
    removeToken();
    this.setState({
      user: null,
      loginModalIsOpen: false,
    })
  }

  fetchUsers = async () => {
    const users = await fetchUsers();
    this.setState({
      users: users
    })
  }

  componentDidMount = async () => {
    const user = await verifyToken();
    if (user) {
      this.setState({
        user: user
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar
            handleLoginFormSubmit={this.handleLoginFormSubmit}
            handleRegisterFormSubmit={this.handleRegisterFormSubmit}
            user={this.state.user}
            handleLogOut={this.handleLogOut}
            loginModalIsOpen={this.state.loginModalIsOpen}
            regModalIsOpen={this.state.regModalIsOpen}
            openLoginModal={this.openLoginModal}
            openRegModal={this.openRegModal}
            closeLoginModal={this.closeLoginModal}
            closeRegModal={this.closeRegModal}
            userLoginError={this.state.userLoginError}
            userRegisterError={this.state.userRegisterError}
            allUsers={this.state.users}
          />
        </header>

        <main id="main-section">
          <div className="main-section">
            {/* <div className="cover">
              <img className="hero-img" src="/img/hero-img.jpg" alt="hero-img"></img>
            </div> */}
            <h1>tackle</h1>
          </div>
          <Route exact path='/' component={Main} />
          <Route
            exact path='/questions/:topic/'
            component={(tackle) => <TopicQuestions
              user={this.state.user}
              topic={tackle.match.params.topic}
              openLoginModal={this.openLoginModal}
            />} />
          <Route
            exact path='/questions/:topic/:id'
            component={(tackle) => <QuestionMain
              user={this.state.user}
              topic={tackle.match.params.topic}
              id={tackle.match.params.id}
              openLoginModal={this.openLoginModal}
            />} />
          {/* <footer>
            <img className="git-logo" src="https://cdn4.iconfinder.com/data/icons/43-social-media-line-icons/24/github-512.png" />
            <i class="fab fa-github"></i>
          </footer> */}
        </main>
      </div>
    );
  }
}

export default App;
