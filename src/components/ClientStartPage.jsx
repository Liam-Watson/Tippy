import React from "react";
import "../App.css";

export default function ClientStartPage(props) {
  return (
    <div >
     <div className="clientButtonTitles">Get started as a beneficiary:</div>
      <button className="clientButton" onClick={props.BeneficiaryCallBackFn}>I want to sign up</button>
      <div className="clientButtonTitles">Or:</div>
     <button className="clientButton" onClick={props.QRCallBackFn}>I want to retrieve my QR code</button>
    </div>
  );
}