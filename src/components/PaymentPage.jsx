import React, { useState } from "react";
import "../App.css";
import QRScan from './QRScanComponent.jsx';
import ManualBeneficiary from './ManualBeneficiary.jsx';

export default function PaymentPage(props) {

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
        return <QRScan></QRScan>;
        case 1:
          return <ManualBeneficiary></ManualBeneficiary>;
      default:
        return <QRScan></QRScan>;
    }
  };

  const HeadingToShow = () => {
    switch (defaultScreen) {
      case 0:
        return "Please scan a QR code below to continue.";
        case 1:
          return "Please enter a beneficiary code below to continue.";
      default:
        return "Please scan a QR code below to continue.";
    }
  };

  const subTextToShow = () => {
    switch (defaultScreen) {
      case 0:
        return "I want to enter a beneficiary code manually";
        case 1:
          return "I want to scan a QR code";
      default:
        return "I want to enter a beneficiary code manually";
    }
  };

  return (
    <div id="paymentScreen1Div" className="paymentScreen1">
      <div className="paymentPageDiv1">
        <h3>Please select a beneficiary</h3>
      </div>
      <div className="paymentPageDiv2">
        <div>
          <p>
          {HeadingToShow()}
          </p>


         {screenToShow()}

          <button onClick={() => changeScreen()} className="manualEntry">{subTextToShow()}</button><br></br>
          <button className="paymentButton" onClick={props.paymentCallBackFn} >Proceed </button>

        </div>
      </div>
   
    </div>

    
  );
}