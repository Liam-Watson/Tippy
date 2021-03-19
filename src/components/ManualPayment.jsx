import React from "react";
import "../App.css";
import CurrencyInput from "react-currency-input-field";

export default function ManualPayment(props) {
  return (
    <div>
      <CurrencyInput
        disableAbbreviations={true}
        allowNegativeValue={false}
        prefix="R "
        placeholder="Please enter a number"
        decimalsLimit={2}
        placeholder="R 0"
        onValueChange={(value, name) => props.setMoney(value)}
      />
      <br></br>
      <button className="paymentButton" onClick={() => props.setNextPage(2)}>
        Proceed{" "}
      </button>
    </div>
  );
}
