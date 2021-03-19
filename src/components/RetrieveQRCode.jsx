import React from "react";
import "../App.css";

export default function RetrieveQRCode(props) {

  function doSomething(){

  }
  
  return (

    <div className="clientStartPageCont">
      
      <div className="clientPageDiv1">
      <button onClick={props.BackFn} id="back" className="backButton">{'<'}</button> 
      <h3>Please sign up below</h3>
      </div>
      <div className="clientPageDiv2">
      <div>
      <div>
     <div>
        <p>Please enter your phone number below:</p>
               <input placeholder="0833571821" className="capitalize" maxLength={10}></input>
               <br></br><br></br><button onClick={()=>doSomething()} className="paymentButton">Retrieve QR Code</button>
    </div>
    </div>
      </div>
      
      </div>
      </div>
    
  );
}

