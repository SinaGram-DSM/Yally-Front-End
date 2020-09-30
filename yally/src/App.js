import React, { useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailPostView from './components/PostDetail/DetailPostView';
import Modal from './components/Global/Modal';
import TimeLineView from './components/Main/TimeLineView';

function App() {

  const baseUrl = useCallback("http://13.125.238.84:81/");

  return (
    <div style={{backgroundColor : "rgb(253, 253, 253)"}}>
      <Router>
        <Switch>
          <Route exact path="/timeLine" render={() => (<TimeLineView baseUrl={baseUrl}/>)}/>
          <Route path="/post/:id" render={({location, match}) =><DetailPostView  baseUrl={baseUrl} location={location} match={match}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
