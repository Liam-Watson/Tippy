import "./App.css";
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, Payment, AccountBalance } from "@material-ui/icons";
import HomePage from "./components/HomePage";
import PaymentPage from "./components/PaymentPage";
import ClientPage from "./components/ClientPage";

window.onload = window.onresize = function () {
  var header= document.getElementById("Header");
  var mainContentArea= document.getElementById("primaryContentAreaDiv");
  var footer= document.getElementById("Footer");
  var height = window.innerHeight;
  var usableArea=height-(header.clientHeight+footer.clientHeight)
  mainContentArea.style.height=usableArea+"px";
  }

function App() {
  const [value, setValue] = useState(0);
  //Choose which page to display. Default is home and initial is home
  const screenToShow = () => {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return <PaymentPage />;
      case 2:
        return <ClientPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {/* Header code: start */}
      <div id="Header">
        <div className="pageTitle">PayMe App</div>
      </div>
      {/* Header code: end */}
      {/* Body code: start */}
      <div className="primaryContentArea" id="primaryContentAreaDiv">
        {screenToShow()}
      </div>
      {/* Body code: end */}

      {/* Footer code: start */}
      <div id="Footer">
        <BottomNavigation value={value} showLabels className="navbar">
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
            label="Collection"
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
