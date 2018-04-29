import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import WifiMap from '../components/WifiMap/WifiMap';

const RoutePaths = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Landing />} />
        <Route path='/map' render={() => <WifiMap />} />
      </Switch>
    </BrowserRouter>
  )
}

export default RoutePaths;
