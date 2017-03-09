import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import history from './history'

import App from './App'
import OrdersPage from './components/OrdersPage'
import ShipmentsPage from './components/ShipmentsPage'
import ReturnsPage from './components/ReturnsPage'
import ReportsPage from './components/ReportsPage'
import AccountPage from './components/AccountPage'

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={OrdersPage} />
      <Route path='/orders' component={OrdersPage} />
      <Route path='/shipments' component={ShipmentsPage} />
      <Route path='/returns' component={ReturnsPage} />
      <Route path='/reports' component={ReportsPage} />
      <Route path='/account' component={AccountPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
