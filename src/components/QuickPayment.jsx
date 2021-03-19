import React from "react";
import "../App.css";
import CurrencyInput from 'react-currency-input-field';

export default function QuickPayment(props) {
  return (
    <div >
     <button className="quickPaymentButton">R5</button>
     <button className="quickPaymentButton">R10</button>
     <button className="quickPaymentButton">R20</button>
     <button className="quickPaymentButton">R50</button>
    </div>
  );
}
