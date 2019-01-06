import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

class Landing extends Component {
    state = {
      videoURL: "../styles/LiveConcertmp4.mp4"
    }
  
  // componentDidMount() {
  //   this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  // }

    render() {
        return (
          <div id="fullscreen-bg-video">
            <div className="landing-content">
              <Link to="/login" className="login-signup">Log In/Sign Up</Link>
              <h1 id="landing-title">Mankato Metal Club</h1>
            </div>
          </div>
        );
      }
    }

export default connect()( Landing );
