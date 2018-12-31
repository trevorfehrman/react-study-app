import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import RegisterContainer from "./containers/Register";
import LoginContainer from "./containers/Login";
import DashboardContainer from "./containers/Dashboard";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    html, body {
      height: 100%;
      width: 100%;
    }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <DashboardContainer {...props} user={this.props.user} />
            )}
          />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user
});

export default connect(mapStateToProps)(App);
