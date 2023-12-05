import React from "react";
import "./Moderate.css";

import { BsTelegram } from "react-icons/bs";
function Moderate() {
  return (
    <div className="moderate">
      <div className="heading2">Moderate</div>
      <div className="aqi2">Air Quality Index </div>
      <div className="value2">53</div>
      <div className="name2">
        <BsTelegram style={{ color: "rgb(1,120,255)" }} />
        <span>Senayan, Jakarta Selanka yedfuyegreugre ergeyrgteyr uytreyr</span>
      </div>
    </div>
  );
}

export default Moderate;
