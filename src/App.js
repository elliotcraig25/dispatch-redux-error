import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store'

import './App.css';
import './components/pages.css'
import routes from './routes';
import Nav from './components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Nav />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;


// baseline app ready to roll