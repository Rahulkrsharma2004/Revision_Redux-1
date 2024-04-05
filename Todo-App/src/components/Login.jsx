// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authAction';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(login(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
      <br />
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <br />
      <br />
      <button type="submit" style={{padding:"2px 10px",border:"2px red solid",backgroundColor:"wheat",color:"red"}}>Login</button>
    </form>
  );
};

export default LoginForm;
