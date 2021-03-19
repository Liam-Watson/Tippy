import './App.css';
import React from 'react';
import { BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import { Home, Payment, AccountBalance } from '@material-ui/icons';
import paymentimg from './pay.png';
function hideAllScreens(){
  var hMID= document.getElementById("homeMoreInfoDiv");
  var hDD = document.getElementById('homeDefaultDiv');
  var pS1 = document.getElementById("paymentScreen1Div");
  var cS1 = document.getElementById("collectionScreen1Div");
hDD.style.zIndex=0;
hDD.style.visibility="hidden";
hMID.style.zIndex=0;
hMID.style.visibility="hidden";
pS1.style.zIndex=0;
pS1.style.visibility="hidden";
cS1.style.zIndex=0;
cS1.style.visibility="hidden";
}



function homeSetup(){
hideAllScreens();
  var hDD = document.getElementById('homeDefaultDiv');
hDD.style.zIndex=1;
hDD.style.visibility="visible";
}

function homeMoreInfoScreen(){
  hideAllScreens();
var hMID= document.getElementById("homeMoreInfoDiv");
hMID.style.zIndex=1;
hMID.style.visibility="visible";
}

function paymentSetup(){
  hideAllScreens();
  var pS1 = document.getElementById("paymentScreen1Div");
  pS1.style.zIndex=1;
  pS1.style.visibility="visible";
}

function collectionSetup(){
  hideAllScreens();
  var cS1 = document.getElementById("collectionScreen1Div");
  cS1.style.zIndex=1;
  cS1.style.visibility="visible";
}

window.onload = window.onresize = function () {
  var header= document.getElementById("Header");
  var mainContentArea= document.getElementById("primaryContentAreaDiv");
  var footer= document.getElementById("Footer");
  var height = window.innerHeight;
  var usableArea=height-(header.clientHeight+footer.clientHeight)
  mainContentArea.style.height=usableArea+"px";
  }


function App() {
  const [value, setValue] = React.useState(0);
  return (
    <div className="App">
    {/* Header code: start */}
    <div id="Header">
  <div className = "pageTitle">
   PayMe App
  </div>
  </div>
   {/* Header code: end */}

    {/* Body code: start */}
  <div className="primaryContentArea" id="primaryContentAreaDiv">
<div id="homeDefaultDiv" className="homeDefault">
<button onClick ={homeMoreInfoScreen}>Start </button>
</div>

<div id="homeMoreInfoDiv" className="homeMoreInfo">
<div className="homeMoreInfoDiv1"> <h3>Welcome to PayMe App!</h3></div>
  <div className="homeMoreInfoDiv2">
    <div>
      <img className="homeMoreInfoDiv2Img" src={paymentimg}></img>
    <h3>Welcome to payments made simple!</h3>
    <p>PayMe App allows for quick and easy cashless payments. Anywhere. Anytime. To get started with a payment, simply click on the "Pay Someone" button in the navigation menu at the bottom of the screen. To get started as a beneficiary, head over to the "Collection" button in the navigation menu at the bottom of the screen.</p>
    </div>
  </div>
</div>

<div id ="paymentScreen1Div" className="paymentScreen1">
This is where payment starts... <br></br>(Still to do)
</div>

<div id ="collectionScreen1Div" className="collectionScreen1">
This is where collection starts... <br></br>(Still to do)
</div>

  </div>
    {/* Body code: end */}

   {/* Footer code: start */}
   <div id="Footer">
   <BottomNavigation
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
    switch(newValue){
      case 0:
        return homeSetup();
      case 1:
        return paymentSetup();
      case 2: 
        return collectionSetup();
    }
  }}
  showLabels
  className="navbar"
>
  <BottomNavigationAction label="Home" icon={<Home />} />
  <BottomNavigationAction label="Pay someone" icon={<Payment  />} />
  <BottomNavigationAction label="Collection" icon={<AccountBalance  />} />
</BottomNavigation>

</div>
   {/* Footer code: end */}
    </div>
  );
}

export default App;
