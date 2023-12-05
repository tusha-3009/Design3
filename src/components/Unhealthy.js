import React from "react";
import "./Unhealthy.css";
import Profile from "./Profile";
import Left from "./Left";
function Unhealthy() {
  return (
    <>
      <div className="unhealthy">
        <Left/>
        <Profile />
      </div>
    </>
  );
}

export default Unhealthy;
