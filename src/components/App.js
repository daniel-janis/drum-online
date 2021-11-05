import './Styles.css';
import React from 'react';
import {  Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Articles from './Articles';
import Videos from './Videos';
import Profile from './Profile';
import Recents from './Recents';
import SavedArts from './Saved-Arts';
import SavedVids from './Saved-Vids';

class App extends React.Component{
  render() {
        return (
            <Router>
                <Switch>
                    <Route exat path="/">
                        <Redirect to="/homepage" />
                    </Route>
                    <Route path="/homepage" Component={Homepage} />
                    <Route path="/articles" Component={Articles} />
                    <Route path="/videos" Component={Videos} />
                    <Route path="/profile" Component={Profile} />
                    <Route path="/recents" Component={Recents} />
                    <Route path="/saved-articles" Component={SavedArts} />
                    <Route path="/saved-videos" Component={SavedVids} />
                    <Route component={Error} />
                </Switch>
            </Router>
        )
    }
};

export default App;
