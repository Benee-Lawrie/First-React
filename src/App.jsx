import React, { useState } from 'react';
import NameInput from "./components/NameInput";
import EmailInput from "./components/EmailInput";
import PhoneInput from "./components/PhoneInput";
import "./styles/style.css";

const Component = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && phone) {
      alert(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
    } else {
      alert('Please fill in all fields');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1 className='h1'> React Sign Up</h1>
      <NameInput value={name} onChange={(value) => setName(value)}/>  
      <EmailInput value={email} onChange={(value) => setEmail(value)} />
      <PhoneInput value={phone} onChange={(value) => setPhone(value)} />
      <button type="submit" className="submit-button"> Submit </button>
    </form>
  );
    
};

export default Component;
