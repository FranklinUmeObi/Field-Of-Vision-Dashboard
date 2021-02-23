import React from "react";
import "./DeviceAdminPage.css";

function DeviceItem(props) {

  let isCritical = false

  if(props.status === "Critical")isCritical = true
  if(props.battery === "ERR")isCritical = true

  return (
    <div className="device">
      <div className="device_left">
        <div className="device_text"><p>{props.number}</p></div>
        <div className="device_text"><p className={isCritical ? "redText" : "greenText"}>{props.status}</p></div>
      </div>

      <div className="device_right">
        <div className="device_text"><p className={isCritical ? "redText" : "greenText"}>{props.battery}</p></div>
        <div className="device_text"><p>{props.on}</p></div>
        <div className="device_text"><p>{props.seat}</p></div>
      </div>

    </div>
  );
}

export default DeviceItem;
