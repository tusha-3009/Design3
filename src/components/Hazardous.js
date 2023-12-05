import React from 'react'
import "./Hazardous.css"
import { BsTelegram } from "react-icons/bs";
function Hazardous() {
  return (
    <div className="hazardous">
      <div className="heading3"> Hazardous</div>
      <div className="aqi3">Air Quality Index </div>
      <div className="value3">247</div>
      <div className="name3">
        <BsTelegram style={{ color: "rgb(1,120,255)",fontSize:"15px"}} />
        <span>Senayan, Jakarta Selanka jsgfyqegwqy iuriutfiqqerfiqe </span>
      </div>
    </div>
  );
}

export default Hazardous