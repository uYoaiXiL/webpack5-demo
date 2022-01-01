import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import Logo from './assets/logo.png';

const rootEl = document.getElementById('root');
render(
  <StrictMode>
    <img style={{ maxWidth: '15%', margin: '40px auto auto', display: 'block' }} src={Logo} alt="" />
    <App />
  </StrictMode>,
  rootEl
);
