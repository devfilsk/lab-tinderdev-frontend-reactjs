import React, { useState } from 'react';
import './Login.css';
import logo from '../assests/logo.svg';

import api from '../services/api';

// import { Container } from './styles';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handeSubmit(e) {
      e.preventDefault();

      const response = await api.post('/devs', {
        username
      });
       
      const { _id } = response.data;

      history.push(`/dev/${_id}`);

      console.log("USERNAME", response);
  }

  return (
    <div className='login-container'>
      <form onSubmit={handeSubmit}>
        <img src={logo} alt="Tindev" />
        <input 
          placeholder="Digite seu usuário do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
