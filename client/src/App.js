import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import RegisterContainer from "./containers/Register";
import LoginContainer from "./containers/Login";
import DashboardContainer from "./containers/Dashboard";
import ForumContainter from "./containers/Forum";

import Header from "./components/Header";

import { checkUser } from "./store/actions/authActions";

import { DarkMode } from "./Themes/dark";
import { LightMode } from "./Themes/light";
import { FETCH_USER_SUCCESS } from "./store/actions";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    html, body {
      height: 100%;
      width: 100%;
      background-color: ${props => props.theme.main};
      color: ${props => props.theme.text}
    }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 125px 24px 20px;
  display: flex;
  justify-content: center;
`;

const App = ({ user, history, checkUser }) => {
  const [darkMode, setValue] = useState(faslse);
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <ThemeProvider theme={darkMode ? DarkMode : LightMode}>
      <GlobalStyle />
      <Header user={user} setValue={setValue} darkMode={darkMode} />
      <Wrapper>
        <div style={{ width: "648px" }}>
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
            <Route
              exact
              path="/forum"
              render={props => <ForumContainer {...props} user={user} />}
            />
          </Switch>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user
});

export default connect(mapStateToProps)(App);
