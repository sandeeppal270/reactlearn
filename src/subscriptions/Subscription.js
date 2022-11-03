import './Subscription.css'
import SubscriptionDate from './SubscriptionDate'
import Container from '../templates/Container'
const Subscription = (props) =>{
    // this is js function four using month day year in string format
   
    return(
        <Container className="subscription">
        <SubscriptionDate date={props.date}/>
        <h2 className='subscription_title'>{props.title}</h2>
        <div className='subscription_price'>{props.amount}</div>
        <button type="button" id="changeTitleButton">Change Title</button>
        </Container>
    )
}
export default Subscription