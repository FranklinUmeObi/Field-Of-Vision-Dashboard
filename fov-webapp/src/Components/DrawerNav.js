import { React, useState } from "react";
import "./DrawerNav.css";

import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HashLink } from 'react-router-hash-link';
import NavItem from "./NavItem.js";

function DrawerNav() {
  let [toggled, setToggled] = useState(false);

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

  function toggleDrawer() {
    setToggled(!toggled);
  }

  return (
    <div className={toggled ? "navMobile sidebar" : "nav sidebar"}>
      {!toggled ? (
        <ThemeProvider theme={theme}>
          <IconButton className="nav_menu" onClick={() => toggleDrawer()}
            color="secondary" aria-label="Open NavDrawer">
            <MenuRoundedIcon />
          </IconButton>
        </ThemeProvider>
      ) : (<div />)}

      {toggled ? (
        <ThemeProvider theme={theme}>
          <IconButton className="nav_close" onClick={() => toggleDrawer()}
            color="primary" aria-label="Close NavDrawer">
            <CloseRoundedIcon />
          </IconButton>
        </ThemeProvider>
      ) : (<div />)}

      <div className="sub-title sub-titleFirst">Device Health</div>
      <HashLink smooth to="/deviceDashboard#Critical"><NavItem id="1"text="Critical Devices" /></HashLink>
      <HashLink smooth to="/deviceDashboard#All"><NavItem id="2"text="All Devices" /></HashLink>
      <HashLink smooth to="/deviceDashboard#Add"><NavItem id="3"text="Add Devices" /></HashLink>

      <div className="sub-title">Game Statistics</div>
      <HashLink smooth to="/statisticsDashboard#game"><NavItem id="4"text="Game Selection" /></HashLink>
      <HashLink smooth to="/statisticsDashboard#general"><NavItem id="5"text="General Stats" /></HashLink>
      <HashLink smooth to="/statisticsDashboard#ball"><NavItem id="6"text="Balls Charts" /></HashLink>
      <HashLink smooth to="/statisticsDashboard#player"><NavItem id="7"text="Player Charts" /></HashLink>

      <div className="sub-title">General Admin</div>
      <HashLink smooth to="/"><NavItem id="8"text="Settings" /></HashLink>
      <HashLink smooth to="/"><NavItem id="9"text="Recent Logins" /></HashLink>
      <HashLink smooth to="/"><NavItem id="10"text="Logout" /></HashLink>
      <HashLink smooth to="/"></HashLink>

    </div>
  );
}

export default DrawerNav;
