import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route  
  } from "react-router-dom";

import Encabezado from './Encabezado';
import Menudos from './Menudos.js';
import Docente from './Docente';
import Estudiante from './Estudiante';
import Materia from './Materia';

class Consultar extends React.Component {
    
    render(){
        return (
        <div className="Consultar">
        <Encabezado></Encabezado>
        Consultar
        <Router>
          <Menudos/>
          <Switch>
            <Route path="/Docente">
              <Docente/>
            </Route>
            <Route path="/Estudiante">
              <Estudiante/>
            </Route>
            <Route path="/Materia">
              <Materia/>
            </Route>
          </Switch>
        </Router>
        </div>
        );
    }
}

export default Consultar;
