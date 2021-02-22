import React from "react";
import "./DeviceAdminPage.css";
import DeviceItem from "./DeviceItem.js";

import IconButton from "@material-ui/core/IconButton";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function DeviceAdminPage() {
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
    <div className="deviceAdmin">
      <div className="deviceContainer">
        <div className="dc_header">
          <h2 className="dc_headerText">Critical Devices</h2>
        </div>

        <div className="device">
          <div className="device_left">
            <p className="device_text blueText">Id</p>
            <p className="device_text blueText">Status</p>
          </div>

          <div className="device_right">
            <p className="device_text blueText">Power</p>
            <p className="device_text blueText">On</p>
            <p className="device_text blueText">Seat</p>
          </div>
        </div>

        <div className="dc_devices">
          <DeviceItem
            number="3046"
            status="Critical"
            battery="86%"
            on="Y"
            seat="B23"
          />
          <DeviceItem
            number="3050"
            status="Critical"
            battery="ERR"
            on="N"
            seat="A11"
          />
        </div>
      </div>

      <div className="deviceContainer">
        <div className="dc_header">
          <h2 className="dc_headerText">All Devices</h2>
        </div>

        <div className="device">
          <div className="device_left">
            <p className="device_text blueText">Id</p>
            <p className="device_text blueText">Status</p>
          </div>

          <div className="device_right">
            <p className="device_text blueText">Power</p>
            <p className="device_text blueText">On</p>
            <p className="device_text blueText">Seat</p>
          </div>
        </div>

        <div className="dc_devices">
          <DeviceItem
            number="3040"
            status="Normal"
            battery="86%"
            on="Y"
            seat="B23"
          />
          <DeviceItem
            number="3041"
            status="Normal"
            battery="96%"
            on="Y"
            seat="B24"
          />
          <DeviceItem
            number="30"
            status="Normal"
            battery="76%"
            on="Y"
            seat="B24"
          />
          <DeviceItem
            number="3043"
            status="Normal"
            battery="100%"
            on="Y"
            seat="T23"
          />
          <DeviceItem
            number="3044"
            status="Normal"
            battery="56%"
            on="Y"
            seat="P23"
          />
          <DeviceItem
            number="3045"
            status="Normal"
            battery="86%"
            on="Y"
            seat="A23"
          />
          <DeviceItem
            number="3046"
            status="Critical"
            battery="86%"
            on="Y"
            seat="B23"
          />
          <DeviceItem
            number="3046"
            status="Critical"
            battery="86%"
            on="Y"
            seat="B23"
          />

          <div className="dc_buttonContainer">
            <div className="dc_button">
              <ThemeProvider theme={theme}>
                <IconButton
                  
                  color="secondary"
                  aria-label="Open Notifications"
                >
                  <AddRoundedIcon className="dc_icon"/>
                </IconButton>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceAdminPage;
