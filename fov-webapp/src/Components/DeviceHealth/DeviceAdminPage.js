import React from "react";
import "./DeviceAdminPage.css";
import DeviceItem from "./DeviceItem.js";

import IconButton from "@material-ui/core/IconButton";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import deviceData from "../../Data/devices.json";

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

  const devices = deviceData.Devices.map((device) => (
    <DeviceItem
    number={device.Device_number}
    status={device.Status}
    battery={device.Battery}
    on={device.On}
    seat={device.Location}
    />
  ));





  return (
    <div  className="deviceAdmin">
      <br id="Critical"/>
      <div className="deviceContainer">
        <div className="dc_header">
          <h2  className="dc_headerText">Critical Devices</h2>
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
      <br id="All"/>

      <div  className="deviceContainer">
        <div className="dc_header">
          <h2  className="dc_headerText">All Devices</h2>
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
          {devices}

          <div id="Add" className="dc_buttonContainer">
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
