import React from 'react';
import { checkUrlForAccessToken } from './util';
import {withRouter} from 'react-router-dom';

class Auth extends React.Component {

  componentDidMount() {
    const authToken = checkUrlForAccessToken();
    if (authToken) {
      // send the token to App
      this.props.onGetAuthToken(authToken);
    } else {
      // send the user to login page
      this.props.history.push("/");
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Auth);