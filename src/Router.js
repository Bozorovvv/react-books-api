import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Book from './pages/Book'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route psth="/book/:id" component={Book} />
    </Switch>
  </BrowserRouter>
)
export default Router