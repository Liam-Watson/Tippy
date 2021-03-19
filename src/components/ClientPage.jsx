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

  const backCall =() =>{
    setValue(0);
  }


function ScreentoShow(){
 switch(value){
   case 0: 
   return  <ClientStartPage QRCallBackFn={()=>qrCallBack()} BeneficiaryCallBackFn={()=>benCallBack()}></ClientStartPage>;
   case 1:
     return <SignUpPage BackFn={()=>backCall()}></SignUpPage>;
   case 2:
     return <RetrieveQRCode BackFn={()=>backCall()}></RetrieveQRCode>;
   default:
    return  <ClientStartPage QRCallBackFn={()=>qrCallBack()} BeneficiaryCallBackFn={()=>benCallBack()}></ClientStartPage>;
 }
}

  return (

    <div id="clientScreen1Div" className="clientScreen1">
    {ScreentoShow()}
   
    </div>

    
  );
}