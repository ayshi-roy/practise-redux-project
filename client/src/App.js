import logo from './logo.svg';
import './App.css';
import Form from './Componant/Form/Form';
import List from './Componant/Form/List/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componant/Home/Home';
import Persons from './Componant/Form/List/Persons';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/list">
            <List></List>
          </Route>
          <Route path="/allList">
            <Persons></Persons>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
