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
      loginModalIsOpen: false,
      regModalIsOpen: false,
      userError: ''
    }
  }

  openLoginModal = () => {
    this.setState({
      userError: '',
      loginModalIsOpen: true
    });
  }

  openRegModal = () => {
    this.setState({
      userError: '',
      regModalIsOpen: true
    });
  }

  closeLoginModal = () => {
    this.setState({
      userError: '',
      loginModalIsOpen: false
    });
  }

  closeRegModal = () => {
    this.setState({
      userError: '',
      regModalIsOpen: false
    });
  }

  async componentDidMount() {
    const user = await verifyToken();
    if (user) {
      this.setState({
        user: user
      })
    }
  }

  resetUserError = () => {
    this.setState({
      userError: ''
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
      this.setState({
        userError: 'login'
      })
    }
  }



  handleRegisterFormSubmit = async (formData) => {
    const createUserCheck = await fetchUsers();
    createUserCheck.forEach(async (user) => {
      if (user.username === formData.username || user.email === formData.username) {
        return
      } else {
        const res = await createUser(formData);
        this.setState({
          user: res.user,
          registerFormData: {
            username: '',
            email: '',
            password: ''
          },
        });
      };
    })
  }


  handleLogOut = (e) => {
    removeToken();
    this.setState({
      user: null,
      loginModalIsOpen: false,
    })
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
            userError={this.state.userError}
            resetUserError={this.state.userError}
          />
          <h1>Tackle;</h1>
        </header>
        
      <main>

          <div className="main-section">
            <div className="cover">
              <img className="hero-img" src="/img/hero-img.jpg" alt="hero-img"></img>
            </div>
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

          <footer>
            <p>this is the footer</p>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
