import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import GameDetails from '../components/Card/SingleCard';

class AppRoute extends Component {
  render() {
    const { match } = this.props;
       return (
        <Switch>
          <Route path={`${match.path}/`} component={Home}/>
          <Route path={`${match.path}rank/:Rank`} component={GameDetails}/>
        </Switch>
    );
  }
}

export default AppRoute;
