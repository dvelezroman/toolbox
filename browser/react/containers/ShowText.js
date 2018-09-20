import React from "react";

const ShowText = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="textFromApi">Texto recibido desde la API</label> 
      </div>
      <input className="form-control" id="textFromApi" type="text" placeholder={props.text} readOnly></input>
    </div>
  );
};

export default ShowText;