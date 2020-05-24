import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Logoff from "./components/Logoff";
import Homepage from "./components/HomePage";
import Registration from "./components/Registration";

import './App.scss';

function App () {
  return (
    <Router>
      <nav>
        <Link to="/"><button>Login</button></Link>
        <Link to="/"><button>Logoff</button></Link>
        <Link to="/"><button>Home</button></Link>
        <Link to="/"><button>Register</button></Link>
      </nav>
      <div className="App">
        <h1>SleepTracker</h1>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/protected" component={Homepage} />
        <PrivateRoute path="/protected" component={Registration} />
        <ProtectedRoute path="/" component={Logoff} />
      </div>
    </Router>
  );
}

export default App;
