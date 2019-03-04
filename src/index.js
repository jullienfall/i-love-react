import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { render } from 'react-dom';

import './scss/index.css';

const routes = require('./client/routes');

const AppRouter = () => (
  <BrowserRouter>{renderRoutes(routes.default)}</BrowserRouter>
);

render(<AppRouter />, document.getElementById('root'));
