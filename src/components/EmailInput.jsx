import React from 'react';

const EmailInput = ({ value, onChange }) => {
  return (
    <input
      type="email"
      value={value}
      className="input-field"
      onChange={(event) => onChange(event.target.value)}
      placeholder="Email"
    />
  );
};

export default EmailInput;