import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.css';
import configureStore from './client/store';
import {loadBooks} from './client/components/actions/booksAction';

const routes = require('./client/routes');

const store = configureStore();
store.dispatch(loadBooks());

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes.default)}</BrowserRouter>
  </Provider>
);

render(<AppRouter />, document.getElementById('root'));
