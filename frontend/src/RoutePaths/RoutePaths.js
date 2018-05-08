import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import WifiMap from '../components/WifiMap/WifiMap';
import InvalidPath from './InvalidPath';

const RoutePaths = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={(props) => <Landing {...props} />} />
        <Route path='/map' render={() => <WifiMap />} />
        <Route component={InvalidPath} />
      </Switch>
    </BrowserRouter>
  )
}

export default RoutePaths;
