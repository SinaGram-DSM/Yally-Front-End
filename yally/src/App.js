import React, { useCallback, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { url } from "./constant/index";
import { DetailPostView, TimeLineView, Setting, Profile, SignUp, Login, SignUpCheck, Users, PostItem, Listener, Listening, Header } from "./components/index";

function App() {
  const [isToken] = useState(localStorage.getItem("accessToken"));
  const [a, setA] = useState(false);
  const baseUrl = useCallback(url);
  const src = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";

  return (
    <div style={{ position: "relative", backgroundColor: "#FDFDFD" }}>
      <Router>
        <Header baseUrl={baseUrl} />
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
            path="/profile/:email/listener/:value/"
            render={(match) => <Listener baseUrl={baseUrl} match={match} />}
          />
          <Route
            exact
            path="/profile/:email/listening/:value/"
            render={(match) => <Listening baseUrl={baseUrl} match={match} />}
          />
          <Route
            exact
            path="/sign-up"
            render={() => <SignUp baseUrl={baseUrl} />}
          />
          <Route exact path="/" render={() => <Login baseUrl={baseUrl} />}>
          {isToken ? <Redirect to="/timeline" /> : <Login baseUrl={baseUrl}/>}
          </Route>
          <Route
            exact
            path="/sign-up-check"
            render={() => <SignUpCheck baseUrl={baseUrl} />}
          />
         
          <Route
            exact
            path="/search/users"
            render={() => <Users baseUrl={baseUrl} />}
          />
          <Route
            exact
            path="/search/posts"
            render={() => <PostItem baseUrl={baseUrl} />}
          />
          <Route
            exact
            path="/settings"
            render={() => <Setting baseUrl={baseUrl} />}
          />
          <Route
            exact
            path="/profile/:email"
            render={(props) => <Profile props={props} baseUrl={baseUrl}/>}

          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
