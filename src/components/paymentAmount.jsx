import React, { useState } from "react";
import "../App.css";
import ManualPayment from './ManualPayment.jsx';
import QuickPayment from './QuickPayment.jsx';


export default function PaymentAmount(props) {


  const [defaultScreen, setValue] = useState(0);

  function changeScreen(){
if (defaultScreen===1){
  setValue(0);
}
else{
  setValue(1);
}
  }

  const screenToShow = () => {
    switch (defaultScreen) {
      case 0:
        return <QuickPayment></QuickPayment>; 
        case 1:
          return <ManualPayment></ManualPayment>;
      default:
        return <QuickPayment></QuickPayment>; 
    }
  };


  const subTextToShow = () => {
    switch (defaultScreen) {
      case 0:
        return "I want to enter a custom amount";
        case 1:
          return "I want to choose from one of the preset amounts";
      default:
        return "I want to enter a custom amount";
    }
  };

  return (
   
    <div id="homeMoreInfoDiv" className="homeMoreInfo">
      <div className="paymentAmountDiv1">
      <h3>Please enter payment amount</h3>
      </div>
      <div className="paymentAmountDiv2" id="paymentAmountDiv2ID">
        <div>
          <div id="paymentAmountContent">
        
          <p>
              Amount:
          </p>
         {screenToShow()}

         <button onClick={() => changeScreen()} className="manualEntry">{subTextToShow()}</button><br></br>
          <button className="paymentButton" onClick={props.paymentAmtCallBackFn}>Proceed </button>
          </div>
        </div> 
      </div>
    </div>
  );
}
