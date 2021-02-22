import React from "react";
import "./DeviceAdminPage.css";

function DeviceItem(props) {
  return (
    <div className="device">
      <div className="device_left">
        <div className="device_text"><p>{props.number}</p></div>
        <div className="device_text"><p>{props.status}</p></div>
      </div>

      <div className="device_right">
        <div className="device_text"><p>{props.battery}</p></div>
        <div className="device_text"><p>{props.on}</p></div>
        <div className="device_text"><p>{props.seat}</p></div>
      </div>

    </div>
  );
}

export default DeviceItem;
