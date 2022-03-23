import React from "react";
import Image from "../Images/React-logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Image} className="nav-logo" alt="" />
      <h1 className="nav-header">ReactFacts</h1>
      <h4 className="nav-text">React Course - Project 1</h4>
    </div>
  );
}
