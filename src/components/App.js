import React from "react";
import { Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <Router>
    <div>
      <NavBar>
      <Route path="/" component = {Home}>Home</Route>
      <Route path='/movies' component ={Movies}>Movies</Route>
      <Route path='/directors' component ={Directors}>Directors</Route>
      <Route path='/actors' component ={Actors}>Actors</Route>
      </NavBar>
      </div>
    </Router>
  )
}


export default App;
