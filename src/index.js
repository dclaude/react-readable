import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import reducer from './app/Reducers'
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render(
  /*
  Provider from react-redux: to be able to access the store form every component (react 'context' magic), ...
  BrowserRouter from react-router: to be able to use <Link>, history, ...
  */
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

