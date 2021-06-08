import React from "react";
import ReactDom from "react-dom";

var d = new Date();
var n = d.getFullYear();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const img = "https://picsum.photos/200";

const name = "Jimbo";
ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Here
    </h1>
    <div>
      <img
        className="lamps "
        src="https://www.w3schools.com/images/lamp.jpg"
        alt="Lamp"
      />

      <img className="images " src={img} alt="Lamp" />

      <img className="images" src={img} alt="ramdom" />
    </div>

    <p>Copyright {n}</p>
  </div>,
  document.getElementById("root")
);
