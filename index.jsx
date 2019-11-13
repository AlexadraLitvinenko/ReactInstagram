import React from 'react';
import { render } from 'react-dom';
import './src/styles/index.css';
import App from './src/components/App'
sessionStorage.setItem('isLogged', false);
render(<App />, document.getElementById('root'));
