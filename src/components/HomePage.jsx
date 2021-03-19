import React from "react";
import "../App.css";

export default function HomePage(props) {
  return (
    <div id="homeDefaultDiv" className="homeDefault">
      <button onClick={props.infoCallBackFn} >Start </button>
    </div>
  );
}