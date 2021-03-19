import React, { useState } from "react";
import "../App.css"
import ClientStartPage from './ClientStartPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import RetrieveQRCode from './RetrieveQRCode.jsx';
export default function PaymentPage(props) {

  const [value, setValue] = useState(3);

  const benCallBack = () => {
    setValue(1);
  }

  const qrCallBack = () => {
    setValue(2);
  }

function ScreentoShow(){
 switch(value){
   case 0: 
   document.getElementById("back").style.visibility="hidden";
   return  <ClientStartPage QRCallBackFn={()=>qrCallBack()} BeneficiaryCallBackFn={()=>benCallBack()}></ClientStartPage>;
   case 1:
    document.getElementById("back").style.visibility="visible";
     return <SignUpPage></SignUpPage>;
   case 2:
    document.getElementById("back").style.visibility="visible";
     return <RetrieveQRCode></RetrieveQRCode>;
   default:
    return  <ClientStartPage QRCallBackFn={()=>qrCallBack()} BeneficiaryCallBackFn={()=>benCallBack()}></ClientStartPage>;
 }
}

  return (

    <div id="clientScreen1Div" className="clientScreen1">
      <div className="clientPageDiv1">
     <button onClick={()=>setValue(0)} id="back" className="backButton">{'<'}</button>   <h3>Please select an option</h3>
      </div>
      <div className="clientPageDiv2">
        <div>
          {ScreentoShow()}
        
       
     </div>
      </div>
   
    </div>

    
  );
}