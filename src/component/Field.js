import React from "react";

const Field = ({ lbl, ph,value, onChange }) => {
  return (
    <div className="field">
      <label>{lbl}</label>
      <input
        type="text"
        placeholder={ph}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

Field.defaultProps = {
  lbl: "LABEL",
  ph: "Place Holder",
};

export default Field;
