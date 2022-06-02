import React from 'react';
import './ListStyle.css'

export const List = () => {
  return <ul className="listContainer">
    <li>Entregable 1 <p>¡ENTREGADO!</p></li>
    <li>Entregable 2 <p>¡ENTREGADO!</p></li>
    <li>Entregable 3 <p>¡ATRASADO!</p></li>
  </ul>
}