import React from "react";

const Formulario = (props) => {
  console.log('Props Formulario', props);
  return (
    <div>
      <div className="form-group">
        <label htmlFor="text">Ingrese un Texto</label>
        <textarea className="form-control" name="text" id="text" rows="3" value={props.text} onChange={props.handleChange}/>
      </div>
      <button className="btn btn-primary" onClick={props.handleSubmit}>
        Devolver
      </button>
    </div>
  );
};

export default Formulario;
