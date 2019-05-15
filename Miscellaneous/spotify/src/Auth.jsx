import React from 'react';
import { checkUrlForAccessToken } from './util';
import {withRouter} from 'react-router-dom';

class Auth extends React.Component {
  componentDidMount() {
    const authToken = checkUrlForAccessToken();
    if (authToken) {
      this.props.onGetAuthToken(authToken);
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Auth);