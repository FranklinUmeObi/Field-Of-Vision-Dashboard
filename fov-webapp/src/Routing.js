import { React, useContext } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import LogInPage from "./Components/LogIn/LogInPage.js";
import DrawerNav from "./Components/DrawerNav.js";
import Header from "./Components/Header.js";
import AnnexButton from "./Components/LogIn/AnnexButton.js";
import DevicePage from "./Components/DeviceHealth/DeviceAdminPage.js";
import StatsPage from "./Components/Statistics/StatsPage.js";
import {AuthContext} from "./Auth"

function Routing() {

    const {currentUser} = useContext(AuthContext);

    return (
        <Router>
        <div className="App">
          <Route exact path="/">
            {
              !currentUser 
              ? (<LogInPage />) 
              : (<Redirect to="/deviceDashboard"></Redirect>)
            }
          </Route>

          <Route exact path="/deviceDashboard">
          {
              !!currentUser 
              ? 
              (<div>
                <Header /> 
                <div className="notHeader">
                  <DrawerNav />
                  <DevicePage /> 
                </div>
              </div>)
              : (<Redirect to="/"></Redirect>)
          }
            
          </Route>

          <Route exact path="/statisticsDashboard">
          {
              !!currentUser  
              ? 
              (<div>
                <Header /> 
                <div className="notHeader">
                  <DrawerNav/>
                  <StatsPage /> 
                </div>
              </div>)
              : (<Redirect to="/"></Redirect>)
          }
          </Route>
        </div>
      </Router>
    )
}

export default Routing
