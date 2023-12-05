import React from 'react'
import './Left.css'

function Left() {
  return (
    <div className="left">
      <div className="heading1">Unhealthy</div>
      <div className="aqi">Air Quality Index </div>
      <div className="value1">99</div>
      <div className="update">
     Last updated at 9 minutes ago
      </div>
    </div>
  );
}

export default Left