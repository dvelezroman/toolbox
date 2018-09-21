import React from "react";

const ShowText = (props) => {
  return (
    <div>
      <div className="form">
        <label htmlFor="textFromApi">Texto recibido desde la API</label> 
      </div>
      <input className="form-control" id="textFromApi" type="text" value={props.text} placeholder="Lo que devuelve la API" readOnly />
    </div>
  );
};

export default ShowText;