import React from "react";
import './Profile.css';
import Pic from './img.jpg'
import { BsTelegram } from "react-icons/bs";
function Profile() {
  return (
    <div className="profile">
      <div className="avatar">
        <img src={Pic} alt="boy wearing mask" />
      </div>
      <div className="name1">
        <span>Senayan, Jakarta Selatan</span>
        <BsTelegram style={{ color: "rgb(1,120,255)" }} />
       
      </div>
    </div>
  );
}

export default Profile;
