import React from "react";
import "../App.css";
import CurrencyInput from "react-currency-input-field";

const PAY5 = 5;
const PAY10 = 10;
const PAY20 = 20;
const PAY50 = 50;

export default function QuickPayment(props) {
  return (
    <div>
      <button onClick={() => props.setMoney(5)} className="quickPaymentButton">R{PAY5}</button>
      <button onClick={() => props.setMoney(10)} className="quickPaymentButton">R{PAY10}</button>
      <button onClick={() => props.setMoney(20)} className="quickPaymentButton">R{PAY20}</button>
      <button onClick={() => props.setMoney(50)} className="quickPaymentButton">R{PAY50}</button><br></br>
      <button onClick={() => props.setNextPage(4)} className="manualEntryQuickyPay"/>
      <button className="paymentButton" onClick={() => {props.setNextPage(2)}}>
            Proceed{" "}
          </button>
    </div>
  );
}
