import React, { useState } from "react";
import "../App.css";
import QRDisplay from "./QrGenerator";

export default function RetrieveQRCode(props) {
  const [number, setNumber] = useState("0000000000");
  const [qrBool, setQRBool] = useState(false);
  const QR = qrBool ? (
    <QRDisplay number={number} />
  ) : (
    <div>
      <p>Please enter your phone number below:</p>
      <input
        onChange={(x) => setNumber(x.target.value)}
        placeholder="0833571821"
        className="capitalize"
        maxLength={10}
      ></input>
      <br></br>
      <br></br>
      <button onClick={() => setQRBool(true)} className="paymentButton">
        Retrieve QR Code
      </button>
    </div>
  );
  return (
    <div className="clientStartPageCont">
      <div className="clientPageDiv1">
        <button onClick={props.BackFn} id="back" className="backButton">
          {"< Back"}
        </button>
        <h3>Please sign up below</h3>
      </div>
      <div className="clientPageDiv2">
        <div>
          <div>{QR}</div>
        </div>
      </div>
    </div>
  );
}
