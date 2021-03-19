import React from "react";
import "../App.css";

export default function RetrieveQRCode(props) {
  return (
    <div>
     <div>
        <p>Please enter your phone number below:</p>
               <input placeholder="0833571821" className="capitalize" maxLength={10}></input>
               <br></br><br></br><button className="paymentButton">Retrieve QR Code</button>
    </div>
    </div>
  );
}