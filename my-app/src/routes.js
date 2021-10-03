import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Layout/Header';
import Footer from './Layout/Footer'

import About from './pages/About';
import Donate from './pages/Donate';
import Home from './pages/HomePage';
import SignUp from './pages/SignUp';
import SavedPets from "./pages/SavedPets";


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/saved-pets">
          <SavedPets />
        </Route>

      </Switch>
      <Footer />
    </Router >
  );
}