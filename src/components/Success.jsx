import React from "react";
import "../App.css";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function Success(props) {
  return (
    <div>
        <div className="successFailure">
        <CheckCircleOutlineIcon fontSize="inherit"></CheckCircleOutlineIcon>
        </div>
      <p>You have paid<br></br> {props.Amt}<br></br> to beneficiary number <br></br>#{props.BeneficiaryNum}<br></br>Your payment has been processed successfully. Thank you for using Tippy.</p>
    </div>
  );
}