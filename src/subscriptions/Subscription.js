import './Subscription.css';
import SubscriptionDate from './SubscriptionDate';
import Container from '../templates/Container';
import React,{useState} from 'react';
// import React from 'react';
// import { useState } from 'react';
const Subscription = (props) => {
    const [title,setTitle]=useState(props.title)
    // this is js function four using month day year in string format
//document.getElementById('changeTitleButton').addEventListener()
    const onClickHandler= () => {
    //title="Changed Title";
    setTitle("Changed Title")
    console.log("On button clicked",title)
    }

return(
        <Container className="subscription">
        <SubscriptionDate date={props.date}/>
        <h2 className='subscription_title'>{title}</h2>
        <div className='subscription_price'>{props.amount}</div>
        <button type="button" id="changeTitleButton" onClick={onClickHandler()}>Change Title</button>
        </Container>
    )
}
export default Subscription