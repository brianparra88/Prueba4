//En App.js 
import { useState } from 'react';
import Formulario from './componentes/Formulario';
import portada from './componentes/img/portada.jpg';
import capitan from './componentes/img/capitan.jpg';
import thor from './componentes/img/thor.jpg';
import hulk from './componentes/img/hulk.jpg';
import ironman from './componentes/img/ironman.jpg';

function App() {

  return (
    <>
    <center>
      <img src= {portada}/>
    </center>
    <br></br>
    <center>
    <img src = {capitan} /> <img src = {thor} /> <img src = {ironman} /> <img src = {hulk} /> 
    </center>
    <Formulario />
    </>
  );

}
export default App;