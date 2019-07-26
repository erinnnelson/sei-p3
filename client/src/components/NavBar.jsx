import React from 'react';
import ModalClick from './ModalClick';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className="navbar">
      <Link to='/'>
        <h5 className="logo">tackle;</h5>
      </Link>
      <nav id="side-links">
        {props.user ?
          (<div className="navbar-greeting">
            <p><span className="hello">Hello</span> {props.user.username}</p>
            <button className="log-button" onClick={props.handleLogOut}>Logout</button>
          </div>) :
          <ModalClick
            {...props}
          />
        }
      </nav>
    </div>
  )
}