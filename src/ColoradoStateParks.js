import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from ".parks/MesaVerdee"
import {trees, wildlife} from "./parks/RockyMountain";

console.log(trees);

wildlife();

function ColoradoStateParks() {
  return (
  <div>
    <MesaVerde />
  </div>
  );
  
  // howManyParks(); // => "42 parks!"


  // return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;