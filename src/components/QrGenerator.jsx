import React from 'react'

export default function QRDisplay(props){
    return <img alt="" src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${props.number}`}/>
}
