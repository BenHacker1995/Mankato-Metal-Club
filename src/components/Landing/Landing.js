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
            {/* <video autoPlay loop id="fullscreen-bg-video" playsInline>
              <source src={ this.state.videoURL } type="video/mp4"/>
            </video> */}
          </div>
        );
      }
    }

export default connect()( Landing );
