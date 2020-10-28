import React, { useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPostView from "./components/PostDetail/DetailPostView";
import TimeLineView from "./components/Main/TimeLineView";
import { url } from "./constant";

function App() {
  const baseUrl = useCallback(url);
  const src = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/";

  return (
    <div style={{ position: "relative", backgroundColor: "#FDFDFD" }}>
      <Router>
        <Switch>
          <Route
            exact
            path="/timeLine"
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
