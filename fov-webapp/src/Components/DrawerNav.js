import { React, useState } from "react";
import "./DrawerNav.css";

import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function DrawerNav() {
  let [toggled, setToggled] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#fff',
      },
    },
  });

  function toggleDrawer() {
    setToggled(!toggled);
  }

  return (
    <div className={toggled ? "navMobile" : "nav"}>
      {!toggled ? 
        <ThemeProvider theme={theme}>
            <IconButton className="nav_menu" onClick={() => toggleDrawer()} color="secondary" aria-label="Open NavDrawer">
                <MenuRoundedIcon />
            </IconButton>
        </ThemeProvider>
      : <div />}
      {toggled ? 
        <ThemeProvider theme={theme}>
            <IconButton className="nav_close" onClick={() => toggleDrawer()} color="primary" aria-label="Close NavDrawer">
                <CloseRoundedIcon />
            </IconButton>
        </ThemeProvider>
      : <div />}
    </div>
  );
}

export default DrawerNav;
