import React from "react";
import "../App.css";
import tip2 from '../tip2.gif';
export default function HomePage(props) {
  return (
    <div id="homeDefaultDiv" className="homeDefault">
      <button className="shadowHome" onClick={props.infoCallBackFn} >Start </button>

    </div>
  );
}