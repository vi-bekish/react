import React, { Component } from 'react';
import Root from './Root'
import { Provider } from "react-redux";
import { store } from './services';
import { BrowserRouter } from 'react-router-dom';
import "./styles/style.css"

const supportsHistory = 'pushState' in window.history;

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter forceRefrech={!supportsHistory}>
            <Root/>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
