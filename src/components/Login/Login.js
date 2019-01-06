import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

class Login extends Component {

  
  // componentDidMount() {
  //   this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  // }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>

                </form>
            </div>
        );
      }
    }

export default connect()( Login );
