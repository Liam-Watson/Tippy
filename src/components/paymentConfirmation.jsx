import React from "react";
import "../App.css";
import Yoco from "./yocopayment";

export default function PaymentConfirmation(props) {
  return (
    <div id="paymentScreen1Div" className="paymentScreen1">
         <button onClick={()=>props.setNextPage(3)} id="back" className="backButton">
          {"< Back"}
        </button>
      <div className="homeMoreInfoDiv1">
        
      </div>
      <div className="homeMoreInfoDiv2">
        <div>
          <h3>Almost there...</h3>
          <p>
            You are about to tip R{props.money}. Thanks for sharing the love with Tippy!
            <br/>
            Enjoy the seamless card payment provided by the amazing Yoco.
          </p>
          <Yoco money={props.money}></Yoco>
        </div>
      </div>

      {/* This is where payment starts... <br></br>(Still to do) */}
    </div>
  );
}
