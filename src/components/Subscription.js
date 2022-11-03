import './Subscription.css'
import SubscriptionDate from './SubscriptionDate'
import Container from './Container'
function Subscription(props){
    // this is js function four using month day year in string format
   
    return(
        <Container className="subscription">
        <SubscriptionDate date={props.date}/>
        <h2 className='subscription_title'>{props.title}</h2>
        <div className='subscription_price'>{props.amount}</div>
        </Container>
    )
}
export default Subscription