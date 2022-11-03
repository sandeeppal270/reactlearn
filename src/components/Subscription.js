import './Subscription.css'
import SubscriptionDate from './SubscriptionDate'
function Subscription(props){
    // this is js function four using month day year in string format
   
    return(
        <div className="subscription">
        <SubscriptionDate date={props.date}/>
        <h2 className='subscription_title'>{props.title}</h2>
        <div className='subscription_price'>{props.amount}</div>
        </div>
    )
}
export default Subscription