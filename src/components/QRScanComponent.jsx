import React, { useEffect, useState } from "react";
import "../App.css";

export default function QRScanComponent(props) {
  //Essentially Yoink from with a few changes :) : https://codesandbox.io/s/qr-code-scanner-ilrm9?file=/index.html
  useEffect(() => {
    const qrcode = window.qrcode;

    const video = document.createElement("video");
    const canvasElement = document.getElementById("qr-canvas");
    const canvas = canvasElement.getContext("2d");

    const qrResult = document.getElementById("qr-result");
    const outputData = document.getElementById("outputData");
    let scanning = false;

    qrcode.callback = (res) => {
      if (res) {
        props.setQrScan(res);
        props.setScreenValue(3);
        outputData.innerText = res;
        scanning = false;
        video.srcObject.getTracks().forEach((track) => {
          track.stop();
        });

        qrResult.hidden = false;
        canvasElement.hidden = true;
      }
    };

    const onclick = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then(function (stream) {
          scanning = true;
          qrResult.hidden = true;
          canvasElement.hidden = false;
          video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
          video.srcObject = stream;
          video.play();
          tick();
          scan();
        });
    };
    onclick();
    function tick() {
      //TODO: Fix video size @Sashen
      canvasElement.height = video.videoHeight; 
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

      scanning && requestAnimationFrame(tick);
    }

    function scan() {
      try {
        qrcode.decode();
      } catch (e) {
        setTimeout(scan, 300);
      }
    }
  }, []);
  return (
    <div id="container">

      <a id="btn-scan-qr">
      </a>

      <canvas hidden="" id="qr-canvas"></canvas>

      <div id="qr-result" hidden="">
        <b>Data:</b> <span id="outputData"></span>
      </div>
    </div>
  );
}
