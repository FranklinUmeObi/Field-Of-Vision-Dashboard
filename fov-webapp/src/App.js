import "./App.css";
import { React, useState } from "react";
import LogInPage from "./Components/LogInPage.js";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  let [loggedIn, setLoggedIn] = useState(false);

  function logIn(submittedPassword) {
    if (submittedPassword === "test") {
      setLoggedIn(true);
    }
    else alert("That is the wrong password. Hint: the password is 'test'")
  }

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
        {(!loggedIn)
          ? <LogInPage logIn={logIn}/>
          : <div>
            <h4> Logged In Success </h4>
            <h1>This is the main Dashboard after log in</h1>
          </div> 
        }        
        </Route>
        <Route exact path="/test">
          <h1>Router Works</h1>
        </Route>
      </div>
    </Router>
  );
}

export default App;
