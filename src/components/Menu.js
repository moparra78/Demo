import React from 'react';
import {
    Link
  } from "react-router-dom";
  
class Menu extends React.Component {
  render() {
      return <nav>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/Registrar" class="nav-link">Registrar</Link>
        </li>
        <li class="nav-item">
          <Link to="/Consultar" class="nav-link">Consultar</Link>
        </li>
        <li class="nav-item">
          <Link to="/Matricular" class="nav-link">Matricular</Link>
        </li>
      </ul>
    </nav>;
  }
}

export default Menu;