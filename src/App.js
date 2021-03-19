import "./App.css";
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, Payment, AccountBalance } from "@material-ui/icons";
import HomePage from "./components/HomePage";
import PaymentPage from "./components/PaymentPage";
import ClientPage from "./components/ClientPage";
import HomeMoreInfo from "./components/HomeMoreInfo";
import PaymentAmount from "./components/paymentAmount";
import PaymentConfirmation from "./components/paymentConfirmation";
import SignUpPage from './components/SignUpPage.jsx';
import RetrieveQRCode from './components/RetrieveQRCode';


window.onload = window.onresize = function () {
  var header = document.getElementById("Header");
  var mainContentArea = document.getElementById("primaryContentAreaDiv");
  var footer = document.getElementById("Footer");
  var height = window.innerHeight;
  var usableArea = height - (header.clientHeight + footer.clientHeight);
  mainContentArea.style.height = usableArea + "px";
};

function App() {
  const [value, setValue] = useState(0);
  //Choose which page to display. Default is home and initial is home
  const infoCallBack = () => {
    setValue(3);
  }
  const paymentCallBack = () => {
    setValue(4);
  }

  const paymentAmtCallBack = () => {
    setValue(5);
  }


  const screenToShow = () => {
    switch (value) {
      case 0:
        return <HomePage infoCallBackFn={infoCallBack} />;
      case 1:
        return <PaymentPage paymentCallBackFn={paymentCallBack}/>;
      case 2:
        return <ClientPage />;
      case 3:
        return <HomeMoreInfo />;
        case 4:
        return <PaymentAmount paymentAmtCallBackFn={paymentAmtCallBack}/>;
      default:
        return <HomePage infoCallBackFn={infoCallBack} />;
    }
  };

  function getValue(){
  switch(value){
    case 3: 
    return 0;
    case 4: 
    return 1;
    case 5:
    return 1;
    case 6:
      return 2;
    default:
      return value;
  
    }
  }

  return (
    <div className="App">
      {/* Header code: start */}
      <div id="Header">
        <div className="pageTitle">Tippy</div>
      </div>
      {/* Header code: end */}
      {/* Body code: start */}
      <div className="primaryContentArea" id="primaryContentAreaDiv">
        {screenToShow()}
      </div>
      {/* Body code: end */}

      {/* Footer code: start */}
      <div id="Footer">
        <BottomNavigation value={getValue()} showLabels className="navbar">
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            onClick={() => setValue(0)}
          />
          <BottomNavigationAction
            label="Pay someone"
            icon={<Payment />}
            onClick={() => setValue(1)}
          />
          <BottomNavigationAction
            label="Account"
            icon={<AccountBalance />}
            onClick={() => setValue(2)}
          />
        </BottomNavigation>
      </div>
      {/* Footer code: end */}
    </div>
  );
}

export default App;