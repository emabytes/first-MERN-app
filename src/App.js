import React, { Component } from "react"

import NavBar from "./components/NavBar"
import ContactsList from "./components/ContactsList"
import EditContact from "./components/EditContact"
import CreateContact from "./components/CreateContact"
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
          <Route path="/" exact component={ContactsList} />
            <Route path="/edit/:id" exact component={EditContact} />
            <Route path="/create" exact component={CreateContact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;