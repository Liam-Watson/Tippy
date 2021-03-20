import React from "react";
import "../App.css";
import CancelIcon from '@material-ui/icons/Cancel';
export default function Failure(props) {
  return (
    <div>
        <div className="successFailure"><CancelIcon fontSize="inherit"></CancelIcon></div>
      <p>Your payment has failed! <br></br>Please try again</p>
    </div>
  );
}