import React from "react";
import { checkUrlForAccessToken } from "./util";
import { withRouter } from "react-router-dom";

const AuthContext = React.createContext(null);

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authToken: null
    };
  }

  componentDidMount() {
    const authToken = checkUrlForAccessToken();
    if (authToken) {
      this.setState({ authToken: authToken });
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
