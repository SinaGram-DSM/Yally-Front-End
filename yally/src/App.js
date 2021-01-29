import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  DetailPostView,
  PasswordResetInput,
  TimeLineView,
  Setting,
  Profile,
  SignUp,
  Login,
  SignUpCheck,
  Listener,
  Listening,
  PasswordReset,
  Modify,
  Header,
} from "./components/index";

function App() {
  const [isToken] = useState(localStorage.getItem("accessToken"));
  return (
    <div style={{ position: "relative", backgroundColor: "#FDFDFD" }}>
      <Router>
        <Switch>
          <Route exact path="/timeline" render={() => <TimeLineView />} />
          <Route exact path="/post/:id" render={() => <DetailPostView />} />
          <Route exact path="/profile/settings" render={() => <Setting />} />
          <Route
            exact
            path="/profile/:email/listener/:value/"
            render={(match) => <Listener match={match} />}
          />
          <Route
            exact
            path="/profile/:email/listening/:value/"
            render={(match) => <Listening match={match} />}
          />
          <Route exact path="/sign-up" render={() => <SignUp />} />
          <Route exact path="/" render={() => <Login />}>
            {isToken ? <Redirect to="/timeline" /> : <Login />}
          </Route>
          <Route exact path="/sign-up-check" render={() => <SignUpCheck />} />
          <Route
            exact
            path="/password-reset"
            render={() => <PasswordReset />}
          />
          <Route
            exact
            path="/password-reset-input"
            render={() => <PasswordResetInput />}
          />
          <Route exact path="/search" render={() => <Header />} />
          <Route exact path="/settings" render={() => <Setting />} />
          <Route exact path="/profile/:email" render={() => <Profile />} />
          <Route exact path="/modify/:postid" render={() => <Modify />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
