import Subscription from './components/Subscription';
import './App.css';

function App() {

    let subscriptions=[
      {
      id:"1",
      date:(new Date('2022','31','10')),
      title:"Monthly Subscription",
      amount:"125.60"
    },
    {
      id:"2",
      date:(new Date('2021','31','10')),
      title:"Annual Subscription",
      amount:"1125.60"
    },
    {
      id:"3",
      date:(new Date('2020','11','10')),
      title:"Quaterly Subscription",
      amount:"1456.60"
    }
  ]
return (
     <div>
        <Subscription passedDate={subscriptions[0].date.toISOString()} passedTitle={subscriptions[0].title} passedAmount={subscriptions[0].amount}/>
        <Subscription passedDate={subscriptions[1].date.toISOString()} passedTitle={subscriptions[1].title} passedAmount={subscriptions[1].amount}/>
        <Subscription passedDate={subscriptions[2].date.toISOString()} passedTitle={subscriptions[2].title} passedAmount={subscriptions[2].amount}/>
      </div>
  );
}

export default App;
