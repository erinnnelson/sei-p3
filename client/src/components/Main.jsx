import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <div Id="topic-section">
        <div className="topic-card">
          <div>
            <Link to='/questions/topic/javascript'>
              <img className="card-topic-img" src="https://b.kisscc0.com/20180815/zlq/kisscc0-computer-icons-logo-brand-javascript-angle-js-5b741783856f77.0690615715343348515466.png" alt="JavaScript"></img>
            </Link>
          </div>
          <h2>JavaScript</h2>
        </div>

        <div className="topic-card">
          <div>
            <Link to='/questions/topic/html'>
              <img className="card-topic-img" src="data:image/png;base64,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" alt="JavaScript"></img>
            </Link>
          </div>
          <h2>HTML</h2>
        </div>

        <div className="topic-card">
          <div>
            <Link to='/questions/topic/css'>
              <img className="card-topic-img" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="JavaScript"></img>
            </Link>
          </div>
          <h2>CSS</h2>
        </div>

        <div className="topic-card">
          <div>
            <Link to='/questions/topic/react'>
              <img className="card-topic-img" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="JavaScript"></img>
            </Link>
          </div>
          <h2>React</h2>
        </div>

        <div className="topic-card">
          <div>
            <Link to='/questions/topic/express'>
              <img className="card-topic-img" src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" alt="JavaScript"></img>
            </Link>
          </div>
          <h2>Express</h2>
        </div>

        <div className="topic-card">
          <div>
            <Link to='/questions/topic/ruby'>
              <img className="card-topic-img" src="https://i2.wp.com/blog.mwpreston.net/wp-content/uploads/2018/09/ruby-logo.png?ssl=1" alt="JavaScript"></img>
            </Link>
          </div>
          <h2>Ruby</h2>
        </div>

        <div className="topic-card">
          <div>
            <Link to='/questions/topic/node'>
              <img className="card-topic-img" src="https://www.mediapreset.com/wp-content/uploads/2017/02/MediaPreset.com-Node.js-Application-Development-Service.jpg" alt="JavaScript"></img>
            </Link>
          </div>
          <h2>Node</h2>
        </div>

        <div className="topic-card">
          <div>
            <Link to='/questions/topic/sql'>
              <img className="card-topic-img" src="https://tchol.org/images/microsoft-azure-logo-png-9.png" alt="JavaScript"></img>
            </Link>
          </div>
          <h2>SQL</h2>
        </div>

      </div>
    )
  }
}


