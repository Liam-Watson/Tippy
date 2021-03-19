import React, { useState } from "react";
import "../App.css";
import QRScan from "./QRScanComponent.jsx";
import ManualBeneficiary from "./ManualBeneficiary.jsx";
import PaymentConfirmation from "./paymentConfirmation";
import QuickPayment from "./QuickPayment";
import ManualPayment from "./ManualPayment";

export default function PaymentPage(props) {
  const [defaultScreen, setValue] = useState(0);
  const [qrScan, setQrScan] = useState(-1);
  const [money, setMoney] = useState(0);

  const setPageOnClick = (pgNum) => {
    setValue(pgNum);
  };



  function changeScreen() {
    if (defaultScreen === 1) {
      setValue(0);
    } else {
      setValue(1);
    }
  }

  const screenToShow = () => {
    switch (defaultScreen) {
      case 0:
        return <QRScan setQrScan={setQrScan} setScreenValue={setValue} />;
      case 1:
        return <ManualBeneficiary setNextPage={setValue} />;
      case 2:
        return <PaymentConfirmation money={money}/>;
      case 3:
        return <QuickPayment setMoney={setMoney} setNextPage={setValue} />;
      case 4:
        return <ManualPayment setMoney={setMoney}  setNextPage={setValue} />;
      default:
        return <QRScan setQrScan={setQrScan} setScreenValue={setValue}/>;
    }
  };

  const HeadingToShow = () => {
    switch (defaultScreen) {
      case 0:
        return "Please scan a QR code below to continue.";
      case 1:
        return "Please enter a beneficiary number below to continue.";
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        return "Please scan a QR code below to continue.";
    }
  };

  const subTextToShow = () => {
    switch (defaultScreen) {
      case 0:
        return "I want to enter a beneficiary number manually";
      case 1:
        return "I want to scan a QR code";
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        return "I want to enter a beneficiary number manually";
    }
  };

  return (
    <div id="paymentScreen1Div" className="paymentScreen1">
      <div className="paymentPageDiv1">
        <h3>Please select a beneficiary</h3>
      </div>
      <div className="paymentPageDiv2">
        <div>
          <p>{HeadingToShow()}</p>

          {screenToShow()}

          <button onClick={() => changeScreen()} className="manualEntry">
            {subTextToShow()}
          </button>
          {/* <br></br> */}
          {/* <button className="paymentButton" onClick={props.paymentCallBackFn}>
            Proceed{" "}
          </button> */}
        </div>
      </div>
    </div>
  );
}
