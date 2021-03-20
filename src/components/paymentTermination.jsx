import React from "react";
import "../App.css";
import tip2 from '../tip2.gif'
import Success from './Success.jsx';
import Failure from './Failure.jsx';
export default function PaymentTermination(props) {
    var success=true;
// props.bool
// props.money
// props.phone
// var success = success of transaction as processed by Yoco API, prop Amt in Success refers to the amount paid, prop BeneficiaryNum in Success refers to the beneficiary paid to 
function contentToDisplay(){
    if (success){
        return <Success Amt="R259" BeneficiaryNum="0839571821"></Success>;
    }
    else{
        return <Failure></Failure>;
    }
}

  return (
    <div className="terminationStyle">
      <div className="homeMoreInfoDiv1">
<h3>Transaction Summary</h3>
    </div>
    <div className="homeMoreInfoDiv2">
      <div>
       {contentToDisplay()}
      </div>
    </div>
    </div>
  );
}