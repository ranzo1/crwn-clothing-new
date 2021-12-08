import logo from './logo.svg';
import './App.css';

import HomePage from '../src/pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = (props) => (
  <div>
    {console.log(props)}
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
