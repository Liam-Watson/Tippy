import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';

export default function QRDisplay(props){
    <a href="#"><i class="fab fa-linkedin-in"></i></a>

    function shareFunc(){
document.getElementById("share").style.visibility="hidden";
document.getElementById("shareButtons").style.visibility="visible";
    }

    

    return <div>
       
<img alt="" className="qrBorderRound"src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${props.number}`}/>
<div >
  <a  href={"https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${props.number}"} download="myQRCode">
 <div className="shareButton">
<GetAppIcon ></GetAppIcon>
</div>
</a>

</div>
</div>

}
