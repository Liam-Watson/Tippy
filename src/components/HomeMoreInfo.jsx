import React from "react";
import paymentimg from "../pay.png";
import "../App.css";

export default function HomeMoreInfo() {
  return (
    <div id="homeMoreInfoDiv" className="homeMoreInfo">
      <div className="homeMoreInfoDiv1">
        {" "}
        <h3>Welcome to PayMe App!</h3>
      </div>
      <div className="homeMoreInfoDiv2">
        <div>
          <img className="homeMoreInfoDiv2Img" src={paymentimg} alt=""></img>
          <h3>Welcome to payments made simple!</h3>
          <p>
            PayMe App allows for quick and easy cashless payments. Anywhere.
            Anytime. To get started with a payment, simply click on the "Pay
            Someone" button in the navigation menu at the bottom of the screen.
            To get started as a beneficiary, head over to the "Collection"
            button in the navigation menu at the bottom of the screen.
          </p>
        </div>
      </div>
    </div>
  );
}
