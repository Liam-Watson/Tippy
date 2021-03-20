import React, { useState } from "react";
import "../App.css";
import QRDisplay from "./QrGenerator";

export default function RetrieveQRCode(props) {
  const [number, setNumber] = useState("0");
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
      <button onClick={() => checkInp()} className="paymentButton">
        Retrieve QR Code
      </button>
    </div>
  );


  function checkInp(){

    var valid = true
    var i;

    for (i = 0; i < number.length; i++) {
      if(number[i] < "0"|| number[i] > "9"){
          valid = false
      }
    }

    if (number.length!=10){
      valid=false;
    }

if (valid){ setQRBool(true); }
else{ alert("Please enter a valid ten digit phone number into the text box to proceed");}

}


  return (
    <div className="clientStartPageCont">
      <div className="clientPageDiv1">
        
        <button onClick={props.BackFn} id="back" className="backButton">
          {"< Back"}
        </button>
        <h3>Retrieve your QR Code </h3>
      </div>
      <div className="clientPageDiv2">
        <div>
          <div>{QR}</div>
        </div>
      </div>
    </div>
  );
}
