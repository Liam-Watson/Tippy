import React, { useState } from "react";
import "../App.css";

export default function ManualBeneficiary(props) {

  const [number, setNumber] = useState("0");

  function checkInp(){
    var valid = true
    var i;

    for (i = 0; i < number.length; i++) {
      if(number[i] < "0"|| number[i] > "9" ){
          valid = false
      }
    }
    if (number.length!=10){
      valid=false;
    }
if (valid){ props.setNextPage(3); }
else{ alert("Please enter a valid ten digit phone number into the text box to proceed");}

}

  return (
    <div>
      <button onClick={() => props.setNextPage(0)} id="back" className="backButton">
          {"< Back"}
        </button>
        <input
        placeholder="0833571821"
        className="capitalize"
        maxLength={10}
        onChange={(x) => setNumber(x.target.value)}
      ></input>
      <br />
      <br></br>
      {/*TODO: SHould this "code" just be the phone number?*/}
      <button className="paymentButton" onClick={()=>checkInp()}>
        Proceed{" "}
      </button>
    </div>
  );
}
