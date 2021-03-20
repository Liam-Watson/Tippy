import React, {useState, useEffect} from "react";
import "../App.css";
import Yoco from "./yocopayment";
import PaymentTermination from "./paymentTermination"

export default function PaymentConfirmation(props) {
  const [token, setTokenBool] = useState(0);
  const [bool, setBool] = useState(false);
  useEffect(() => {
    if(token === 1 || token === 2){
      setBool(true);
    }
  }, [token])
  return (
    bool ? <PaymentTermination bool={bool} money={props.money} phone={props.phone}/> : (<div id="paymentScreen1Div" className="paymentScreen1">
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
          <Yoco setToken={setTokenBool} phone={props.phone} money={props.money}></Yoco>
        </div>
      </div>

      {/* This is where payment starts... <br></br>(Still to do) */}
    </div>)
  );
}
