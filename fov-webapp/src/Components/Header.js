import {React, useState} from "react";

import {DarkToggle} from "./Toggle.js";
import "./Header.css";
import logo from "../Assets/logowhite.png";

import IconButton from "@material-ui/core/IconButton";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
//import Avatar from "@material-ui/core/Avatar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function Header() {
  let [isOpen, setisOpen] = useState(false);
  function toggleOpen(){
    setisOpen(!isOpen)
  }
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#fff",
      },
    },
  });
  return (
    <div className="header">
      <div className="header_left">
        <img className="header_logo" src={logo} alt="Field Of Vision" />
      </div>

      <div className="header_middle">
        <h1 className="header_title">DASHBOARD</h1>
      </div>

      <div className="header_right">
      <DarkToggle/>
      <div className="header_spacer"></div>
      <div  className="dropdownContainer">
      <ThemeProvider theme={theme}>
          <IconButton className="header_icon" onClick={toggleOpen} color="secondary" aria-label="Open Notifications"  >
            <NotificationsNoneRoundedIcon />
          </IconButton>
        </ThemeProvider>
        {isOpen? <div className="dropdownContent">
        <p>You have x devices that are critical</p>
        </div>: <div/> }
       
      </div>
        
        <div className="header_spacer"></div>

        <ThemeProvider theme={theme}>
        <IconButton className="header_icon" color="secondary" aria-label="Open Notifications"  >
            <AccountCircleRoundedIcon />
            </IconButton>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
