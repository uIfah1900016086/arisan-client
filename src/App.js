import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";

function App() {
  return (
    <HashRouter basename="/">
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/createuser" component={CreateUser} />
        <Route path="/user" component={UserList} />
        <Route path="/edituser/:id" component={EditUser} />
      </div>
    </HashRouter>
  );
}

const Home = () => <div><h2>Home</h2></div>

export default App;
