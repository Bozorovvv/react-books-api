import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import Books from "./pages/Books";

export default function App () {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books/:id" component={Books} />
      </Switch>
    </Router>
  )
}