import React from 'react';
import {
    Link
  } from "react-router-dom";
  
class Menudos extends React.Component {
  render() {
      return <nav>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/Docente" class="nav-link">Docente</Link>          
        </li>
        <li class="nav-item">
          <Link to="/Estudiante" class="nav-link">Estudiante</Link>
        </li>
        <li class="nav-item">
          <Link to="/Materia" class="nav-link">Materia</Link>
        </li>
      </ul>
    </nav>;
  }
}
      

export default Menudos;