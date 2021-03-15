import React from "react";

import "./NavItem.css";

import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import ImportantDevicesRoundedIcon from "@material-ui/icons/ImportantDevicesRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import SportsSoccerRoundedIcon from "@material-ui/icons/SportsSoccerRounded";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
import DonutSmallRoundedIcon from "@material-ui/icons/DonutSmallRounded";
import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function NavItem(props) {
  let icon;

  switch (props.id) {
    case "1":
      icon = <ErrorOutlineRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "2":
      icon = <ImportantDevicesRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "3":
      icon = <AddRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "4":
      icon = <SportsSoccerRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "5":
      icon = <DonutLargeRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "6":
      icon = <DonutSmallRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "7":
      icon = <EqualizerRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "8":
      icon = <SettingsRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "9":
      icon = <ListAltRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    case "10":
      icon = <PowerSettingsNewRoundedIcon className = "nav_icon" color="primary"/>;
      break;
    default:
      icon = <ArrowRightRoundedIcon className = "nav_icon" color="primary"/>;
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
    <div>
      <div className="option">
        <ThemeProvider theme={theme}>{icon}</ThemeProvider>
        <p className="nav_text"> {props.text} </p>
      </div>
    </div>
  );
}

export default NavItem;
