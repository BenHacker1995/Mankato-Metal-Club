import { React, Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

class Landing extends Component {

    render() {
        return (
          <div>
          <video autoPlay muted loop id="landingVid">
            <source src="../styles/LiveConcertmp4.mp4" type="video/mp4"/>
          </video>
          </div>
        );
      }
    }

export default connect()( Landing );
