// import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home';
import Plan from './components/TripPlan';
import BookNow from './components/BookATrip';

import './App.css';

function App() {
  return (
    <BrowserRouter>   
    
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/plan' component={Plan} />
        <Route exact path='/book' component={BookNow} />
      </Switch>

    </BrowserRouter>

  )
}

export default App;
