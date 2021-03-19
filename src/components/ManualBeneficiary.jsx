import React from "react";
import "../App.css";

export default function ManualBeneficiary(props) {
  return (
    <div>
      <button onClick={()=>props.setNextPage(0)} id="back" className="backButton">
          {"< Back"}
        </button>
      <input
        placeholder="0833571821"
        className="capitalize"
        maxLength={10}
      ></input>
      <br />
      <br></br>
      {/*TODO: SHould this "code" just be the phone number?*/}
      <button className="paymentButton" onClick={() => props.setNextPage(3)}>
        Proceed{" "}
      </button>
    </div>
  );
}
