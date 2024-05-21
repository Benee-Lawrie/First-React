import React from 'react';

const NameInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      className="input-field"
      onChange={(event) => onChange(event.target.value)}
      placeholder="Name"
    />
  );
};

export default NameInput;