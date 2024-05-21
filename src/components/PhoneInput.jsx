import React from 'react';

const PhoneInput = ({ value, onChange }) => {
  return (
    <input
      type="tel"
      value={value}
      className="input-field"
      onChange={(event) => onChange(event.target.value)}
      placeholder="Phone Number"
    />
  );
};

export default PhoneInput;