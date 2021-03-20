import React, { useEffect } from "react";

export default function Yoco(props) {
  var yoco = new window.YocoSDK({
    publicKey: "pk_test_ed3c54a6gOol69qa7f45",
  });
  useEffect(() => {
    helperFn(yoco, props.money);
  }, []);
  return (
    <div>
      <button className="paymentButton" id="checkout-button">Proceed</button>
    </div>
  );
}

function helperFn(yoco, money) {
  let checkoutButton = document.querySelector("#checkout-button");
  checkoutButton.addEventListener("click", function () {
    yoco.showPopup({
      amountInCents: money*100,
      currency: "ZAR",
      name: ": Tippy payment",
      description: "Cashless Payments - made simple.",
      callback: function (result) {
        // This function returns a token that your server can use to capture a payment
        if (result.error) {
          const errorMessage = result.error.message;
          console.log(money)
          alert("error occured: " + errorMessage);
          
        } else {
          console.log(result);
          console.log(money)
          publicPayment(result, money);
          alert("card successfully tokenised: " + result.id);
          upBal(money*100)
        }
        // In a real integration - you would now pass this chargeToken back to your
        // server along with the order/basket that the customer has purchased.
      },
    });
  });
}

async function publicPayment(tokenization, money) {
  //     curl https://online.yoco.com/v1/charges/ \
  //   -u sk_test_960bfde0VBrLlpK098e4ffeb53e1: \
  //   -d token=tok_test_DjaqoUgmzwYkwesr3euMxyUV4g \
  //   -d amountInCents=2799 \
  //   -d currency=ZAR
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://online.yoco.com/v1/charges/",
    method: "POST",
    //   "X-Auth-Secret-Key": tokenization.fingerprint,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
    },
    auth: {
      user: "sk_test_960bfde0VBrLlpK098e4ffeb53e1:S",
    },
    data: {
      token: tokenization.id,
      amountInCents: money + "",
      currency: "ZAR",
    },
  };
  // var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "https://connect.stripe.com/oauth/token",
  //     "method": "POST",
  //     "headers": {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "cache-control": "no-cache",
  //     },
  //     "data": {
  //       "client_secret": "sk_test_f7PKXx5NRBFG5r41nTrPT7qB",
  //       "code": "\"{AUTHORIZATION_CODE}\"",
  //       "grant_type": "authorization_code"
  //     }
  //   }
  console.log("made it to async");
  const response = await fetch(settings);
  // const jsonResponse = await JSON.stringify(response);
  console.log(response);
}
async function upBal(id, num) {
  try {
    const response = await fetch(`http://localhost:8080/record/${id}`, {headers: { "Content-Type": "application/json" },method: 'POST', body:JSON.stringify({money: num})});
    const x = await response.json();
    console.log(x);
    return x;
    //  console.log(x);
  } catch (e) {
    // console.log(e);
  }
}