import React from "react";
import "../App.css";
import CurrencyInput from "react-currency-input-field";

export default function ManualPayment(props) {
  function checkAmountGZero(){
    if (props.getMoney>2){
      return props.setNextPage(2);
    }
    else{
      console.log(props.getMoney);
      alert("Please select an amount to pay greater than R2");
    }
  }
  return (
    <div>
      <CurrencyInput
        disableAbbreviations={true}
        allowNegativeValue={false}
        prefix="R "
        placeholder="Please enter a number"
        decimalsLimit={2}
        placeholder="R 0"
        onValueChange={(value, name) => {props.setMoney(value)}}
      />
      <br></br><br></br>
      <button className="paymentButton" onClick={() => checkAmountGZero()}>
        Proceed{" "}
      </button>
      <button onClick={()=>props.setNextPage(3)} id="back" className="backButton">
          {"< Back"}
        </button>
    </div>
  );
}
