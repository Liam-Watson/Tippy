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
        return <PaymentConfirmation phone={qrScan} setNextPage={setValue}  money={money}/>;
      case 3:
        return <QuickPayment setMoney={setMoney} getMoney={money} setNextPage={setValue} />;
      case 4:
        return <ManualPayment setMoney={setMoney} getMoney={money}  setNextPage={setValue} />;
      default:
        return <QRScan setQrScan={setQrScan} setScreenValue={setValue}/>;
    }
  };

  const HeadingToShow = () => {
    switch (defaultScreen) {
      case 0:
        return "Scan a QR code below to continue.";
      case 1:
        return "Please enter a beneficiary phone number below to continue.";
      case 2:
        break;
      case 3:
        return "Please choose from one of the  quick payment amounts below";
      case 4:
        return "Please  enter a payment amount below";
      default:
        return "Please scan a QR code below to continue.";
    }
  };
 

  const headingToShow= () => {
    switch (defaultScreen) {
      case 0:
        return "Please select a beneficiary";
      case 1:
        return "Please select a beneficiary";
      case 2:
        return "Payment confirmation";
      case 3:
        return "Please select an amount ";
      case 4:
        return "Please select an amount ";
      default:
        return "I want to enter a beneficiary number manually";
    }
  }
  
  const subTextToShow = () => {
    switch (defaultScreen) {
      case 0:
        return "I want to enter a beneficiary phone number manually";
      case 1:
       break;
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
      
        <h3>{headingToShow()}</h3>
      </div>
      <div className="paymentPageDiv2">
        <div>
          <br></br><br></br>
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
