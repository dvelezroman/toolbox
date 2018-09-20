import React from "react";

const ShowText = (props) => {
  return (
    <div>
      <input className="form-control" type="text" placeholder={props.text} readOnly></input>
    </div>
  );
};

export default ShowText;