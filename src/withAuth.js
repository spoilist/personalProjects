import React from "react";

import { AuthContext } from "./Auth";

function withAuth(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {authToken => (
            <WrappedComponent authToken={authToken} {...this.props} />
          )}
        </AuthContext.Consumer>
      );
    }
  };
}

export default withAuth;
