import React from "react";
import "./style.css";
import CardComp from "../compétences/competence";
import LogoJavascript from "./JavaScript_logo.png"
import LogoWordpress from "./wordpress-logo.png"
import LogoReact from "./react-logo.webp"
import LogoPHP from "./PHP-logo.png"

function Compcontainer() {
  
 


  return (
    <div className="comp-text" id="Competences">
    <h2> Compétences</h2>
    <div className="Compcontainer" >
      <CardComp
        title="WordPress"
        img={LogoWordpress}
        alt="logo wordpress" 
      />
      <CardComp
        title="PHP"
        img={LogoPHP} 
        alt="logo PHP" 
      />
      <CardComp
        title="Javascript"
        img={LogoJavascript}
        alt="logo Javascript" 
      />
      <CardComp
        title="React"
        img={LogoReact} 
        alt="logo React"  
      />
    </div>
    </div>
  );
}

export default Compcontainer;
