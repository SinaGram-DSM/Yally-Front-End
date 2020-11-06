import React, { useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPostView from "./components/PostDetail/DetailPostView";
import TimeLineView from "./components/Main/TimeLineView";
import Setting from "./components/AccountSetting/Setting";
import Profile from "./components/UserPage/Profile";
import SignUp from "./components/SignUp/SignUp";
import { url } from "./constant";
import Login from "./components/Login/Login";
import SignUpCheck from "./components/SignUp/SignUpCheck";
import Users from "./components/Search/Users";
import PostItem from "./components/Main/PostItem";
import Header from "./components/Header/Header";
import Background from "./components/Global/Background";
import Listener from "./components/Listen/Listener";
import Listening from "./components/Listen/Listening";

function App() {
  const baseUrl = useCallback(url);
  const src = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";

  return (
    <div style={{ position: "relative", backgroundColor: "#FDFDFD" }}>
      <Router>
        <Header baseUrl={baseUrl} />
        <Background />
        <Switch>
          <Route
            exact
            path="/timeline"
            render={() => <TimeLineView baseUrl={baseUrl} src={src} />}
          />
          <Route
            exact
            path="/post/:id"
            render={({ location, match }) => (
              <DetailPostView
                baseUrl={baseUrl}
                src={src}
                location={location}
                match={match}
              />
            )}
          />
          <Route
            exact
            path="/profile/settings"
            render={() => <Setting baseUrl={baseUrl} />}
          />
          <Route
            exact
            path="/profile/:name/listener/:value/"
            render={(match) => <Listener baseUrl={baseUrl} match={match} />}
          />
          <Route
            exact
            path="/profile/:name/listening/:value/"
            render={(match) => <Listening baseUrl={baseUrl} match={match} />}
          />
          <Route
            exact
            path="/sign-up"
            render={() => <SignUp baseUrl={baseUrl} />}
          />
          <Route exact path="/" render={() => <Login baseUrl={baseUrl} />} />
          <Route
            exact
            path="/sign-up-check"
            render={() => <SignUpCheck baseUrl={baseUrl} />}
          />
          <Route exact path="/search/users" render={() => <Users />} />
          <Route exact path="/search/posts" render={() => <PostItem />} />
          <Route exact path="/settings" render={() => <Setting />} />
          <Route
            path="/profile/:email"
            render={(props) => <Profile {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
