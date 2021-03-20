import React, { useState } from "react";
import "../App.css";
import QRDisplay from "./QrGenerator";
export default function SignUpPage(props) {
  const [number, setNumber] = useState("0");
  const [qrBool, setQRBool] = useState(false);

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

  const QR = qrBool ? (
    <QRDisplay number={number} />
  ) : (
    <div>
      {" "}
      <p>Please enter your phone number below:</p>
      <input
        placeholder="0833571821"
        className="capitalize"
        maxLength={10}
        onChange={(x) => setNumber(x.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button onClick={() =>  checkInp()} className="paymentButton">
        Sign up
      </button>
    </div>
  );
  return (
    <div className="clientStartPageCont">
      <div className="clientPageDiv1">
    
        <h3>Sign up to Tippy!</h3>
      </div>
      <div className="clientPageDiv2">
 
        <div>
          <div>
          <button onClick={props.BackFn} id="back" className="backButton">
          {"< Back"}
        </button>
            <div className="AccountSignUp">{QR}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
