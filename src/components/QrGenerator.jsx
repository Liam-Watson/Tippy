import React from 'react'

export default function QRDisplay(props){
    return <img alt="" src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${props.number}`}/>
}
