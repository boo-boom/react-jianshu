import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Header from './components/Header';
import Home from './views/home';
import Detail from './views/detail';

class App extends Component {
  constructor() {
    super()
    console.log(store.getState())
  }
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header/>
          <BrowserRouter>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/detail" component={Detail} />
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
 