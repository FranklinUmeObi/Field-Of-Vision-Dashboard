import React from "react";

import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

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
      icon = <ErrorOutlineRoundedIcon color="primary"/>;
      break;
    case "2":
      icon = <ImportantDevicesRoundedIcon color="primary"/>;
      break;
    case "3":
      icon = <AddRoundedIcon color="primary"/>;
      break;
    case "4":
      icon = <SportsSoccerRoundedIcon color="primary"/>;
      break;
    case "5":
      icon = <DonutLargeRoundedIcon color="primary"/>;
      break;
    case "6":
      icon = <DonutSmallRoundedIcon color="primary"/>;
      break;
    case "7":
      icon = <EqualizerRoundedIcon color="primary"/>;
      break;
    case "8":
      icon = <SettingsRoundedIcon color="primary"/>;
      break;
    case "9":
      icon = <ListAltRoundedIcon color="primary"/>;
      break;
    case "10":
      icon = <PowerSettingsNewRoundedIcon color="primary"/>;
      break;
    default:
      icon = <ArrowRightRoundedIcon color="primary"/>;
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
        <p class="nav_text"> {props.text} </p>
      </div>
    </div>
  );
}

export default NavItem;
