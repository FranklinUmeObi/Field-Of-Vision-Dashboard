import { React, useState, useEffect } from "react";
import "./DeviceAdminPage.css";
import DeviceItem from "./DeviceItem.js";

import Popup from 'reactjs-popup';
import IconButton from "@material-ui/core/IconButton";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import deviceData from "../../Data/devices.json";

function DeviceAdminPage() {
  let [allDevices, setAll] = useState();
  let [criticalDevices, setCrit] = useState();

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


  useEffect(() => {
    const devices = deviceData.Devices.map((device, index) => (
      <DeviceItem
        key={index}
        number={device.Device_number}
        status={device.Status}
        battery={device.Battery}
        on={device.On}
        seat={device.Location}
      />
    ));
    setAll(devices);

    let deviceDataCritical = [];
    for (let i = 0; i < deviceData.Devices.length; i++) {
      if (deviceData.Devices[i].Status === "Critical") {
        deviceDataCritical.push(deviceData.Devices[i]);
      }
    }

    const devicesCrit = deviceDataCritical.map((device, index) => (
      <DeviceItem
        key={index}
        number={device.Device_number}
        status={device.Status}
        battery={device.Battery}
        on={device.On}
        seat={device.Location}
      />
    ));
    setCrit(devicesCrit);

  }, []);

  return (
    <div className="deviceAdmin">
      <br id="Critical" />
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
          {criticalDevices}
        </div>
      </div>
      <br id="All" />

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
          {allDevices}

          <div id="Add" className="dc_buttonContainer">
            <div className="dc_button">
              <ThemeProvider theme={theme}>
                <Popup
                  trigger={
                    <IconButton color="secondary" aria-label="Add Device">
                      <AddRoundedIcon className="dc_icon" />
                    </IconButton>
                  }
                  modal
                >
                  {close => (
                    <div className="modal">
                      <form>
                        <label>
                          Device ID:
                          <input type="number" />
                        </label>
                        <label>
                          Power:
                          <input type="number" min="0" max="100" />
                        </label>
                        <label>
                          Seat Number:
                          <input type="text" />
                        </label>
                        <input type="submit" value="Submit" />
                      </form>
                    </div>
                  )}

                </Popup>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceAdminPage;
