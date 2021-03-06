import './Styles.css';
import React from 'react';
import {  Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import Articles from './Articles';
import Videos from './Videos';
import Profile from './Profile';
import Recents from './Recents';
import SavedArts from './Saved-Arts';
import SavedVids from './Saved-Vids';
import Error from './Error';

class App extends React.Component{
  render() {
        return (
            <Router>
                <Switch>
                    <Route path="/Login" component={Login} />
                    <Route exact path="/">
                        <Redirect to="/Login" />
                    </Route>
                    <Route path="/homepage" component={Homepage} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/videos" component={Videos} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/recents" component={Recents} />
                    <Route path="/saved-articles" component={SavedArts} />
                    <Route path="/saved-videos" component={SavedVids} />
                    {/* <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} /> */}
                    <Route component={Error} />
                </Switch>
            </Router>
        )
    }
};

export default App;
