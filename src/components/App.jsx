/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Main from "./Main";
import Animation from "./Animation";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main isLogged={false} />
          <Animation />
        </Route>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Profile" component={Profile} path="/:user" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
