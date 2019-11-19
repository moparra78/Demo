import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
//import Shoppinlist from './Shoppinlist';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import './App.css';
//import Encabezado from './components/Encabezado';
import Menu from './components/Menu.js';
import Registrar from './components/Registrar.js';
import Consultar from './components/Consultar';
import Matricular from './components/Matricular';

class App extends React.Component {
  render(){
    return (
      //<div className="App">
      //<Encabezado/>
      //</div>
      <Router>
        <Menu/>
        <Switch>
          <Route path="/Registrar">
            <Registrar/>
          </Route>
          <Route path="/Consultar">
            <Consultar/>
          </Route>
          <Route path="/Matricular">
            <Matricular/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
