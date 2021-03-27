import React from 'react';

import {
  HashRouter,
  Route,
  Switch /*BrowserRouter , Router*/,
} from 'react-router-dom';
import Main from './containers/Main/Main';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={['/', '/hi-pet-admin']} component={Main} />
      </Switch>
    </HashRouter>
  );
}

export default App;
