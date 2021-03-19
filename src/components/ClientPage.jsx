import React, { useState } from "react";
import "../App.css";
import QRScan from './QRScanComponent.jsx';
import ManualBeneficiary from './ManualBeneficiary.jsx';

export default function PaymentPage(props) {


  return (
    <div id="clientScreen1Div" className="clientScreen1">
      <div className="clientPageDiv1">
        <h3>Please select an option</h3>
      </div>
      <div className="clientPageDiv2">
        <div>
          <div className="clientButtonTitles">Get started as a beneficiary:</div>
      <button className="clientButton">I want to sign up</button>
      <div className="clientButtonTitles">Or:</div>
     <button className="clientButton">I want to retrieve my QR code</button>
     </div>
      </div>
   
    </div>

    
  );
}