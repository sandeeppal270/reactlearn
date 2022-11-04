import './FormSubscription.css';
const FormSubscription=()=>{
    return (
        <form>
            <div class="new_subscription_controls">
                <div class="new_subscription_control">
                    <label>Title</label>
                    <input type="text"></input>
                </div>
                <div class="new_subscription_control">
                    <label>Date</label>
                    <input type="date"></input>
                </div>
                <div class="new_subscription_control">
                    <label>Amount</label>
                    <input type="text"></input>
                </div>

            </div>
            <div class="new_subscription_actions">
               <button type="submit">Add Subscription</button> 
            </div>
        </form>

    )
}
export default FormSubscription