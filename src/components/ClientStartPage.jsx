import React from "react";
import "../App.css";

export default function ClientStartPage(props) {


function BenOpen(){
  props.BeneficiaryCallBackFn();
}

function QROpen(){
  props.QRCallBackFn();
}

  return (
    <div className="clientStartPageCont">
      
        <div className="clientPageDiv1">
       <h3>Please select an option</h3>
      </div>
      <div className="clientPageDiv2">
        <div>
      <div className="clientButtonTitles">Get started as a beneficiary:</div>
      <button className="clientButton" onClick={()=>BenOpen()}>I want to sign up</button>
      <div className="clientButtonTitles">Or:</div>
     <button className="clientButton" onClick={()=>QROpen()}>I want to retrieve my QR code</button>
     </div>
     </div>
     

     </div>
     
  );
}