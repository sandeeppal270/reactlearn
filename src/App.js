import Subscription from './subscriptions/Subscription';
import './App.css';
import Container from './templates/Container';
// import React from 'react';

const App = () => {

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
    },
    {
      id:"4",
      date:(new Date('2019','12','10')),
      title:"half-Quarter Subscription",
      amount:"256776.60"
    }
  ]
return (
  // React.createElement('div',{},React.createElement('h2',{},'Lets start'))
     <Container>
        <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
        <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
        <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>
        <Subscription date={subscriptions[3].date} title={subscriptions[3].title} amount={subscriptions[3].amount}/>

      </Container>
  );
}

export default App;
