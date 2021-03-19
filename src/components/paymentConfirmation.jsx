import React from "react";
import "../App.css";
{/*import Yoco from "./yocopayment";*/}

export default function PaymentConfirmation() {
  return (
    <div id="paymentScreen1Div" className="paymentScreen1">
         <div className="homeMoreInfoDiv1">
      
         <h3>Payment Confirmation</h3>
    </div>
    <div className="homeMoreInfoDiv2">
      <div>
        <h3>Almost there...</h3>
        <p>
         You're about to pay R27.99 to Godfree Williams <br></br>(Beneficiary #VJQ29).
        </p>
        {/*<Yoco></Yoco>*/}
      </div>
      </div>
     
      {/* This is where payment starts... <br></br>(Still to do) */}
    </div>
  );
}