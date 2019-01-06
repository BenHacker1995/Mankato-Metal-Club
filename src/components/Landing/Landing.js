import React, { Component } from 'react';
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
              <p className="login-signup">Log In/Sign Up</p>
              <h1 id="landing-title">Mankato Metal Club</h1>
            </div>
          </div>
        );
      }
    }

export default connect()( Landing );
