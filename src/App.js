import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import styles from './theme/styles';
import withRoot from './withRoot';

const AppContainer = () => (
  <Router>
    <div>
      <Route component={NavBar} />
      <div className="App">
        <Switch>
          <Route component={AppRoutes} />
        </Switch>
      </div>
      <Route component={Footer} />
    </div>
  </Router>
);

const App = () => (
  <Router>
   <Route
      component={withRoot(
        withStyles(styles, { withTheme: true })(AppContainer)
      )}
    />
  </Router>
);

export default App;
