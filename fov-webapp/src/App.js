import "./App.css";

import { React, useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import LogInPage from "./Components/LogIn/LogInPage.js";
import DrawerNav from "./Components/DrawerNav.js";
import Header from "./Components/Header.js";
import AnnexButton from "./Components/LogIn/AnnexButton.js";

import DevicePage from "./Components/DeviceHealth/DeviceAdminPage.js";
import StatsPage from "./Components/Statistics/StatsPage.js";

function App() {
  let [loggedIn, setLoggedIn] = useState(true);
  //Change Back To false
  function logIn(submittedPassword) {
    if (submittedPassword === "test") {
      setLoggedIn(true);
    } else alert("That is the wrong password. Hint: the password is 'test'");
  }

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          {
            !loggedIn 
            ? (<LogInPage logIn={logIn} />) 
            : (<Link to="/deviceDashboard"><AnnexButton text="Go To Dashboard"/></Link>)
          }
        </Route>

        <Route exact path="/deviceDashboard">
        {
            loggedIn 
            ? 
            (<div>
              <Header /> 
              <div className="notHeader">
                <DrawerNav/>
                <DevicePage /> 
              </div>
            </div>)
            : (<Link to="/"><AnnexButton text="Login"/></Link>)
        }
          
        </Route>

        <Route exact path="/statisticsDashboard">
        {
            loggedIn 
            ? 
            (<div>
              <Header /> 
              <div className="notHeader">
                <DrawerNav/>
                <StatsPage /> 
              </div>
            </div>)
            : (<Link to="/"><AnnexButton text="Login"/></Link>)
        }
        </Route>
      </div>
    </Router>
  );
}

export default App;
