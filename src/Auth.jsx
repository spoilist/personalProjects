import React from "react";
import { withRouter } from "react-router-dom";

import { getAccessToken } from "./util";

const AuthContext = React.createContext(null);

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authToken: null
    };
  }

  componentDidMount() {
    const authToken = getAccessToken();
    if (authToken) {
      this.setState({ authToken: authToken });
      this.props.history.replace(this.props.location.pathname);
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.authToken}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default withRouter(AuthProvider);
export { AuthContext };
