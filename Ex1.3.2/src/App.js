import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link,Route, Switch } from 'react-router-dom';
import PeopleContainer from './PeopleContainer'

function App() {
  return (
    <>
    <h3 style={{color: "red"}}>Ex 1.3.2</h3>
    <BrowserRouter>
      <Switch>
        <Route path='/people'>
          <PeopleContainer/>
        </Route>
        <Link to='/people'>People</Link>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
