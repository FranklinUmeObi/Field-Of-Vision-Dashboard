import { React, useState, useEffect } from "react";
import "./DeviceAdminPage.css";
import DeviceItem from "./DeviceItem.js";

import firebase from "../../Firebase";

import Popup from "reactjs-popup";
import IconButton from "@material-ui/core/IconButton";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function DeviceAdminPage() {
  let [allDevices, setAll] = useState();
  let [criticalDevices, setCrit] = useState();

  let [popID, setpopID] = useState();
  let [popBattery, setpopBattery] = useState();
  let [popSeat, setpopSeat] = useState();

  function IDChange(event) {
    setpopID(event.target.value);
  }
  function batteryChange(event) {
    setpopBattery(event.target.value);
  }
  function seatChange(event) {
    setpopSeat(event.target.value);
  }

  function submitData() {
    alert("success");
    db.collection("devices").add({
      Device_Number: parseInt(popID),
      Status: "Normal",
      Battery: parseInt(popBattery),
      On: "Y",
      Location: popSeat,
      Owner: user.email,
    });
    getData()
  }

  function resetData() {
    alert("reset");
  }

  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

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
    getData();
  }, []);

  async function getData() {
    const countref = db.collection("devices");
    const snapshot = await countref.where("Owner", "==", user.email).get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    let DBdevices = [];
    snapshot.forEach((doc) => {
      DBdevices.push(doc.data());
    });

    const devices = DBdevices.map((device, index) => (
      <DeviceItem
        key={index}
        number={device.Device_Number}
        status={device.Status}
        battery={device.Battery}
        on={device.On}
        seat={device.Location}
      />
    ));
    setAll(devices);

    let deviceDataCritical = [];
    for (let i = 0; i < DBdevices.length; i++) {
      if (DBdevices[i].Status === "Critical") {
        deviceDataCritical.push(DBdevices[i]);
      }
    }

    const devicesCrit = deviceDataCritical.map((device, index) => (
      <DeviceItem
        key={index}
        number={device.Device_Number}
        status={device.Status}
        battery={device.Battery}
        on={device.On}
        seat={device.Location}
      />
    ));
    setCrit(devicesCrit);
  }

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

        <div className="dc_devices">{criticalDevices}</div>
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
                  {(close) => (
                    <div className="modal">
                      <form id="addDeviceForm">
                        <label className="addDeviceLabel">
                          Device ID:
                          <input
                            className="addDeviceInput"
                            type="number"
                            required="required"
                            placeholder="e.g. 25"
                            onChange={IDChange}
                          />
                        </label>
                        <label className="addDeviceLabel">
                          Power:
                          <input
                            className="addDeviceInput"
                            type="number"
                            min="0"
                            max="100"
                            placeholder="0-100%"
                            required="required"
                            onChange={batteryChange}
                          />
                        </label>
                        <label className="addDeviceLabel">
                          Seat Number:
                          <input
                            className="addDeviceInput"
                            type="text"
                            required="required"
                            placeholder="e.g. B33"
                            onChange={seatChange}
                          />
                        </label>
                        <input
                          type="reset"
                          value="Reset"
                          onClick={() => resetData()}
                        />
                        <input
                          type="submit"
                          value="Submit"
                          onClick={() => submitData()}
                        />
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
